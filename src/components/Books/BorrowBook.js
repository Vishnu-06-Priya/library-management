import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useParams } from 'react-router-dom';
import axios from "axios";
const formvalidationSchema = yup.object({

    book_name: yup
        .string()
        .required().min(4),
    book_count: yup
        .number()
        .required(),
    author: yup
        .string()
        .required().min(4),
    description: yup
        .string()
        .required().min(5),
    name: yup
        .string()
        .required().min(4),
    id: yup
        .number()
        .required(),
    email: yup
        .string()
        .required(),
    contact: yup
        .number()
        .required()

})

function BorrowBook() {
    const [isLoading, setLoading] = useState(false);
    const [bookCount, setBookCount] = useState();
    const params = useParams();

    useEffect(() => {
        getUsers();
    }, []);

    let getUsers = async () => {
        try {
            const details = await axios.get(`https://638dfe2b4190defdb753283c.mockapi.io/books/${params.id}`);
            setBookCount(details.data.book_count);
            myFormik.setValues(details.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }


    const navigate = useNavigate();

    const myFormik = useFormik({
        initialValues: {

            book_name: "",
            book_count: "",
            author: "",
            description: "",
        },

        validationSchema: formvalidationSchema,

        onSubmit: async (values) => {
            try {
                setLoading(true);
                await axios.put(`https://638dfe2b4190defdb753283c.mockapi.io/books/${params.id}`, values);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
            navigate("/portal/book");

        },
    })

    return (
        <>
            <form className="container" onSubmit={myFormik.handleSubmit}>
                <div className="row mt-4 ps-5">

                    <div className="col-lg-5  mt-5 ">
                        <h3>Enter Your Details:</h3>
                        <input
                            type="text"
                            className={`form-control ${myFormik.touched.name && myFormik.errors.name ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.name}
                            name="name"
                            placeholder="Name"
                            onBlur={myFormik.handleBlur}
                            onChange={myFormik.handleChange}
                        /><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.name && myFormik.errors.name ? myFormik.errors.name : null}</span><br />
                        <input
                            type="text"
                            className={`form-control ${myFormik.touched.id && myFormik.errors.id ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.id}
                            name="id"
                            placeholder="Enter your id"
                            onBlur={myFormik.handleBlur}
                            onChange={myFormik.handleChange}
                        /><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.id && myFormik.errors.id ? myFormik.errors.id : null}</span><br />
                        <input
                            type="text"
                            className={`form-control ${myFormik.touched.email && myFormik.errors.email ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.email}
                            name="email"
                            placeholder="email"
                            onBlur={myFormik.handleBlur}
                            onChange={myFormik.handleChange}
                        /><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.email && myFormik.errors.email ? myFormik.errors.email : null}</span><br />
                        <input
                            type="text"
                            className={`form-control ${myFormik.touched.contact && myFormik.errors.contact ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.contact}
                            name="contact"
                            placeholder="Enter Your Contact"
                            onBlur={myFormik.handleBlur}
                            onChange={myFormik.handleChange}
                        /><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.contact && myFormik.errors.contact ? myFormik.errors.contact : null}</span><br />
                    </div>

                    <div className="col-lg-5  m-5">
                        <h3>Book Details:</h3>
                        <input
                            type="text"
                            className={`form-control ${myFormik.touched.book_name && myFormik.errors.book_name ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.book_name}
                            name="book_name"
                            placeholder="Name"
                            onBlur={myFormik.handleBlur}
                            onChange={myFormik.handleChange}
                        /><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.book_name && myFormik.errors.book_name ? myFormik.errors.book_name : null}</span><br />
                        <input
                            type="text"
                            className={`form-control ${myFormik.touched.book_count && myFormik.errors.book_count ? "is-invalid" : "is-valid"}`}
                            value={bookCount}
                            name="book_count"
                            placeholder="Enter book count"
                            onBlur={myFormik.handleBlur}
                            onChange={myFormik.handleChange}
                        /><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.book_count && myFormik.errors.book_count ? myFormik.errors.book_count : null}</span><br />
                        <input
                            type="text"
                            className={`form-control ${myFormik.touched.author && myFormik.errors.author ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.author}
                            name="author"
                            placeholder="Enter Author Name"
                            onBlur={myFormik.handleBlur}
                            onChange={myFormik.handleChange}
                        /><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.author && myFormik.errors.author ? myFormik.errors.author : null}</span><br />
                        <textarea rows="2" cols="3"
                            type="text"
                            className={`form-control ${myFormik.touched.description && myFormik.errors.description ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.description}
                            name="description"
                            placeholder="Enter book's description"
                            onBlur={myFormik.handleBlur}
                            onChange={myFormik.handleChange}>
                        </textarea><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.description && myFormik.errors.description ? myFormik.errors.description : null}</span><br />
                        <div className="d-sm-flex  justify-content-end mt-3">
                            <button disabled={isLoading} onClick={() => {
                                myFormik.setValues({ "book_count": bookCount - 1 });
                                myFormik.handleSubmit();
                            }} type="submit" className="btn btn-primary create-btn">
                                {isLoading ? "isLoading" : "Borrow"}
                            </button>
                        </div>
                    </div>

                </div>

            </form>
        </>
    )
}

export default BorrowBook
