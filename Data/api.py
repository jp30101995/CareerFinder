from flask import request, url_for
from flask_api import FlaskAPI, status, exceptions
import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
from surprise import NMF
from surprise import KNNWithMeans
from surprise import accuracy
from surprise.model_selection import KFold
from surprise import SVD, SVDpp
from surprise import Dataset
from surprise.model_selection import cross_validate, train_test_split
from surprise import Reader
# Input data files are available in the "../input/" directory.
# For example, running this (by clicking run or pressing Shift+Enter) will list the files in the input directory
from surprise import KNNBasic
import matplotlib.pyplot as plt
from sklearn.neighbors import NearestNeighbors
import os
import json


app = FlaskAPI(__name__)


notes = {
    0: 'do the shopping',
    1: 'build the codez',
    2: 'paint the door',
}
algo = SVD()

def note_repr(key):
    return {
        'url': request.host_url.rstrip('/') + url_for('notes_detail', key=key),
        'text': notes[key]
    }


@app.route("/", methods=['GET', 'POST'])
def notes_list():
    """
    List or create notes.
    """
    if request.method == 'POST':
        note = str(request.data.get('text', ''))
        idx = max(notes.keys()) + 1
        notes[idx] = note
        return note_repr(idx), status.HTTP_201_CREATED

    # request.method == 'GET'
    return [note_repr(idx) for idx in sorted(notes.keys())]


@app.route("/<int:key>/", methods=['GET', 'PUT', 'DELETE'])
def notes_detail(key):
    """
    Retrieve, update or delete note instances.
    """
    if request.method == 'PUT':
        note = str(request.data.get('text', ''))
        notes[key] = note
        return note_repr(key)

    elif request.method == 'DELETE':
        notes.pop(key, None)
        return '', status.HTTP_204_NO_CONTENT

    # request.method == 'GET'
    if key not in notes:
        raise exceptions.NotFound()
    return note_repr(key)

@app.route("/getSubjects/<int:learner_id>/", methods=['GET', 'PUT', 'DELETE'])
def getSubjects(learner_id):
    data = pd.read_csv('hack.csv')
    learner_data = data[data["LearnerID"] == learner_id].head(1)
    learner_schoolid = learner_data['Schoolid'].values[0]
    learner_curr_year = learner_data['CurretYearName'].values[0]

    data['year'] = data['MasterYearName'].str.slice(5)
    data['year'] = pd.to_numeric(data['year'], errors='coerce').fillna(0).astype(np.int64)

    data['current_year'] = data['CurretYearName'].str.slice(5)
    data['current_year'] = pd.to_numeric(data['current_year'], errors='coerce').fillna(0).astype(np.int64)

    current_yr = data[data["LearnerID"] == learner_id].sort_values(['year'], ascending=[0]).iloc[[0],:]["year"].values[0]
    past_data = data[(data['year'] <= current_yr) & (data['year'] != 0) & (data['current_year'] > current_yr) & (data['LearnerID'] != learner_id)]

    df = past_data.pivot_table(index = ['LearnerID'], values = 'Points.1', columns = 'MasterSubjectName').fillna(0).reset_index()

    learner_pivot = learner_data.pivot_table(index = ['LearnerID'], values = 'Points.1', columns = 'MasterSubjectName').fillna(0).reset_index()

    final_pivot = pd.concat([learner_pivot, df], ignore_index=False, sort=True).fillna(0)
    final_pivot[final_pivot["LearnerID"] == learner_id]


    model_knn = NearestNeighbors(metric='cosine', algorithm='brute', n_neighbors=5, n_jobs=-1)
    model_knn.fit(df)

    values, indexes = model_knn.kneighbors(final_pivot[final_pivot["LearnerID"] == learner_id].values.reshape(1,-1))
    similar_leaners = dict(zip(indexes[0], values[0]))


    final_learner_pivot = final_pivot[final_pivot["LearnerID"] == learner_id]


    sorted_leaners = [(k, similar_leaners[k]) for k in sorted(similar_leaners, key=similar_leaners.get, reverse=True)]

    index_arr = []
    values_arr = []
    for l in sorted_leaners:
        index_arr.append(l[0])
        values_arr.append(l[1])


    similar_learners_df = df.loc[index_arr, :]

    similar_learners_df['similarity'] = values_arr
    final_learner_pivot['similarity'] = 1
    similar_learners_without_self = similar_learners_df
    similar_learners_df = pd.concat([similar_learners_df,final_learner_pivot], ignore_index=False, sort=False).fillna(0) 
    learners = data[(data['year'] == (current_yr + 1)) & (data['LearnerID'].isin(similar_learners_without_self['LearnerID'].values))]
    #similar_learners_df 
    subjects = learners.MasterSubjectName.unique()

    arr = []
    grid_obj = {
        "grid":learners.pivot_table(index = ['LearnerID'], values = 'Points.1', columns = 'MasterSubjectName').fillna(0).reset_index().to_json()
    }
    arr.append(grid_obj)
    #return similar_learners_df.to_json(orient='records')
    for s in subjects:
        id = str(learner_id) + '-' + str(learner_schoolid)
        subject = learner_curr_year + '-' + s
        obj = {
            "learnerID": learner_id,
            "subject": subject,
            "marks": algo.predict(id, subject)
        }
        arr.append(obj)
    return json.dumps(arr)
    # return json.dumps(learners)
    # return "".join(map(str, subjects))


@app.route("/getLearnersNew/<int:learner_id>/", methods=['GET', 'PUT', 'DELETE'])
def getLearnersNew(learner_id):
    return getSubjects(learner_id)

#getSubjects(233381)
@app.route("/getLearners/<int:learner_id>/", methods=['GET', 'PUT', 'DELETE'])
def getLearners(learner_id):
    #learner_id = 232301
    data_df = pd.read_csv('hack.csv')
    df = data_df.pivot_table(index = ['LearnerID'], values = 'Points.1', columns = 'MasterSubjectName').fillna(0).reset_index()
    #df = df.reset_index() 

    test= df[df["LearnerID"] == learner_id]
    
    # test = test.drop('LearnerID', axis=1)

    model_knn = NearestNeighbors(metric='cosine', algorithm='brute', n_neighbors=5, n_jobs=-1)
    model_knn.fit(df)
    values, indexes = model_knn.kneighbors(test.values.reshape(1,-1))
    similar_leaners = dict(zip(indexes[0], values[0]))

    sorted_leaners = [(k, similar_leaners[k]) for k in sorted(similar_leaners, key=similar_leaners.get, reverse=True)]

    index_arr = []
    values_arr = []
    for l in sorted_leaners:
        index_arr.append(l[0])
        values_arr.append(l[1])

    print(df.loc[index_arr, :])
    similar_learners_df = df.loc[index_arr, :]

    similar_learners_df['similarity'] = values_arr
    test['similarity'] = 1
    #similar_learners_df=similar_learners_df.append(test)
    similar_learners_df
    return similar_learners_df.to_json(orient='records')


def trainModel():
    data_df = pd.read_csv('hack.csv')
    data_df['ids'] = data_df['LearnerID'].map(str) + '-' + data_df['Schoolid'].map(str)
    data_df['subjects'] = data_df['MasterYearName'] + '-' + data_df['MasterSubjectName']
    data_df["BPoints"] = data_df["Points.1"] / 10
    data_df["BPoints"] = data_df["BPoints"].astype(int)
    reader = Reader(rating_scale=(0, 10))
    data = Dataset.load_from_df(data_df[['ids', 'subjects', 'BPoints']], reader)
    trainset, testset = train_test_split(data, test_size=.05)
    algo.fit(trainset)

algo = SVD()
trainModel()
if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0')
    