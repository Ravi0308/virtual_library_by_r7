import streamlit as st
import pickle
import numpy as np

popular_df = pickle.load(open('popular.pkl','rb'))
pt = pickle.load(open('pt.pkl','rb'))
books = pickle.load(open('books.pkl','rb'))
similarity_scores = pickle.load(open('similarity_scores.pkl','rb'))

def recommend(user_input):
    index = np.where(pt.index == user_input)[0][0]
    similar_items = sorted(list(enumerate(similarity_scores[index])), key=lambda x: x[1], reverse=True)[1:5]

    data = []
    for i in similar_items:
        item = []
        temp_df = books[books['Book-Title'] == pt.index[i[0]]]
        item.extend(list(temp_df.drop_duplicates('Book-Title')['Book-Title'].values))
        item.extend(list(temp_df.drop_duplicates('Book-Title')['Book-Author'].values))
        item.extend(list(temp_df.drop_duplicates('Book-Title')['Image-URL-M'].values))

        data.append(item)

    return data

def main():
    st.title('Book Recommender System')

    user_input = st.text_input('Enter a book title:', '')

    if st.button('Recommend'):
        recommended_books = recommend(user_input)

        st.header('Recommended Books')
        for book in recommended_books:
            st.image(book[2])
            st.write(book[0])
            st.write(book[1])

    st.sidebar.title('Top 50 Books')
    for i in range(len(popular_df)):
        st.sidebar.subheader(popular_df.iloc[i]['Book-Title'])
        st.sidebar.write(popular_df.iloc[i]['Book-Author'])
        st.sidebar.image(popular_df.iloc[i]['Image-URL-M'])
        st.sidebar.write(f"Votes - {popular_df.iloc[i]['num_ratings']}")
        st.sidebar.write(f"Rating - {popular_df.iloc[i]['avg_rating']}")
        st.sidebar.write("---")

if __name__ == '__main__':
    main()
