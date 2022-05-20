import React from 'react';
import Js from './../../images/js.png'
import MongoDb from './../../images/mongo.jfif'
import Sql from './../../images/sql.png'
import Jwt from './../../images/jwt.jpg'

const Blog = () => {
    return (
        <div>
            <div className="container">
                <h3 className='fw-bold mt-5'>My Blogs</h3>
               
            <div class="row row-cols-1 row-cols-md-2 g-4 mt-2">
  <div class="col">
    <div class="card shadow-lg p-3 mb-5 bg-body rounded" style={{height:'500px'}}>
      <img src={Js} className="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">What are the differences between javascript and nodejs?</h5>
        <p class="card-text">Javascript is a programming language where nodejs is a runtime environment for running javascript locally. We can run javascript in browser but to locally run it, we need nodejs.</p>
        <button style={{background:'#DAA520'}} className='btn btn-sm fw-bold text-white'>Read More</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div className="card shadow-lg p-3 mb-5 bg-body rounded" style={{height:'500px'}}>
      <img src={MongoDb} className="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">When should you use nodejs and when should you use mongodb?</h5>
        <p class="card-text">We should use node js while running javascript programs in our local computer and managind server. Hoowever, for creating and managing Database, we have to use MongoDB.</p>
        <button style={{background:'#DAA520'}} className='btn btn-sm fw-bold text-white'>Read More</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow-lg p-3 mb-5 bg-body rounded" style={{height:'500px'}}>
      <img src={Sql} className="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">What are the differences between sql and nosql databases?</h5>
        <p class="card-text">SQL databases are relational where, noSQL databases ar non-relational. NoSQL is better for hierchical data storage. SQL databases are vertically scalable, but NoSQL is horizontally scalable.</p>
        <button style={{background:'#DAA520'}} className='btn btn-sm fw-bold text-white'>Read More</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow-lg p-3 mb-5 bg-body rounded" style={{height:'500px'}}>
      <img src={Jwt} className="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">What is the purpose of jwt and how does it work?</h5>
        <p class="card-text">For authorization and authentication purpose, jwt token is basically used. The token issued for an user holds three parts: header, payload, signature, thus creating the token as unique and secured one.</p>
        <button style={{background:'#DAA520'}} className='btn btn-sm fw-bold text-white'>Read More</button>
      </div>
    </div>
  </div>


  
  </div>
  <h4 className='fw-bold text-dark  mb-4'>More Blog <span style={{color:'#DAA520'}}>Comming Soon!!!!</span></h4>
            </div>
        </div>
    );
};

export default Blog;