import {useSelectore,useDispatch} from 'react-redux';
import {useState} from 'react';


const book = () =>{
    const dispatch = useDispatch();
    const books = useSelectore(state => state.books);
    const [title, setTitle] = useState("");
}

const AddBook = () =>{
    if (title.trim()==="") return;
}

