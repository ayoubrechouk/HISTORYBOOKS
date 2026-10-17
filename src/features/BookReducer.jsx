export const initialState = {
  books: [
    {
      id: 1,
      title: "Don Quixote",
      author: "Miguel de Cervantes",
      year: 1605,
      rating: 4.8,
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxi9lHxf4HKszN2bLas5t-3W5pqgKkYjgwK0sd9hLrSw&s=10",
      liked: false,
      inWatchlist: false
    },
    {
      id: 2,
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      year: 1967,
      rating: 4.7,
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Tk6GuxiEBSqucSsiTa2Dtry-fsET5PWWEGVL1hqh7A&s=10",
      liked: false,
      inWatchlist: false
    },
    {
      id: 3,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      year: 1866,
      rating: 4.7,
      cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFrCMziOP8QHPGAKCCGL5676Uun7_cgTG8N9kgFVbDmA&s=10",
      liked: false,
      inWatchlist: false
    },
    {
      id: 4,
      title: "War and Peace",
      author: "Leo Tolstoy",
      year: 1869,
      rating: 4.6,
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiP7bofa5spf-nBHun6ARifa191BpEKPJIFmnTpDF-Uw&s=10",
      liked: false,
      inWatchlist: false
    },
    {
      id: 5,
      title: "1984",
      author: "George Orwell",
      year: 1949,
      rating: 4.7,
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8P6RiiEGwX947431SRkKPhDm_WoX8JfpJQ2fYsYwOPg&s=10",
      liked: false,
      inWatchlist: false
    },
    {
      id: 6,
      title: "The Odyssey",
      author: "Homer",
      year: -700,
      rating: 4.6,
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnbzHUZFzGAYfzk2GixdhPmz9v16gju6YUjZ9oxmXKIA&s=10",
      liked: false,
      inWatchlist: false
    },
    {
      id: 7,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      rating: 4.5,
      cover: "https://www.andersondesigngroupstore.com/cdn/shop/files/1024_d8d39a52-2ba7-49a8-95e5-30728b8c341b.jpg?v=1787073864",
      liked: false,
      inWatchlist: false
    },
    {
      id: 8,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      rating: 4.6,
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEvvSqi5Ynftei8PrKuxtiTgLSWj_1XHoEB03pxgrVQ&s=10",
      liked: false,
      inWatchlist: false
    },
    {
      id: 9,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      rating: 4.8,
      cover: "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
      liked: false,
      inWatchlist: false
    },
    {
      id: 10,
      title: "Les Misérables",
      author: "Victor Hugo",
      year: 1862,
      rating: 4.7,
      cover: "https://m.media-amazon.com/images/I/71mPzsZvh6L._AC_UF1000,1000_QL80_.jpg",
      liked: false,
      inWatchlist: false
    }
  ]
};


export const BookReducer = (state=initialState,action)=>{
    switch (action.type){
        case "ADD":
            return {...state,
        books: state.books.map(book => 
          book.id === action.payload ? { ...book, inWatchlist: true } : book
        )};
        case "REMOVE":
            return {...state,
        books: state.books.map(book => 
          book.id === action.payload ? { ...book, inWatchlist: false } : book
        )};
        case "TOGGLE_LIKE":
            return {
        ...state,
        books: state.books.map(book => 
          book.id === action.payload ? { ...book, liked: !book.liked } : book
        )
      };
      case "SET_FILTER":
            return { ...state, filter: action.payload };
    default :
        return state;
    }
}