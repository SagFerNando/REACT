import axios from 'axios'
import { useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompShowBlogs = () => {
    const [blogs, setBlog] = useState([])
    useEffect(() => {
        getBlogs()
    }, [])

    const getBlogs = async () => {
        const res = await axios.get(URI)
        getBlogs(res.data)
    }

    const deleteBlog = async (id) => {
        axios.delete(`${URI}${id}`)
        getBlogs()
    }
    return (
        
            <div className="card text-center tarjetas contenedor mt-5">


                <div className="card-body">


                    <h1 id='title' className="card-title">Aprende </h1>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header"/>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    {blogs.map( (blog)=> (

                                        <button className="btn btn-outline-secondary" key={blog.id}>

                                            {blog.title}
                                        </button>
                                    )) }
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            
            
            )

}
            export default CompShowBlogs