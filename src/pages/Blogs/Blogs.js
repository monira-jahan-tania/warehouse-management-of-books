import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div>
            <h1 className='my-5'>BLOGS</h1>
            <div className='blogs'>

                <h2 >Difference between javascript and nodejs</h2>
                <div className='mx-5'>
                    <ul>
                        <li>Javascript is a programing language. On the other hand, Node.js is a run time environment for Javascript</li>
                        <li>Javacript is used for web application for client. On the other hand, Node.js is used for accessing any scripting application</li>
                        <li>javascript can run in many engine like firefox, safari, googlechrome, etc. On the other hand, Node.js only runs in V8 engine.</li>
                        <li>JavaScript is normally following Java Programming language standard. On the other hand, node JS is written in C++ and provides a V8 engine base browser javascript running engine</li>
                    </ul>
                </div>
                <h2>When should you use nodejs and when should you use mongodb</h2>
                <div className='mx-5'>
                    <p>MOngoDb and node JS are not substitute for one another. We may use both of them for making any website.</p><br />
                    <p>Node JS provide us an environment for JS runnig on our PC which is helpful for using libraries and easy to run.</p>
                    <br />
                    <p>On the other hand, MongoDB is a database where we can store the data used for our website. If we make a website with JS we can use Node,js to run our JS files. And we may need to keep the data on the mongoDb fo the webiste.</p><br />
                    <p>The summary is MongoDB is a database where we can store data and NodeJS helps us to to connect our client site to database by it's server site.</p>
                </div>
                <h2> Differences between sql and nosql databases.</h2>
                <p className='mx-5'>sql database is a databse based on  structured query language whereas, nosql database is a databse based on  unstructured query language. <br /> With sql database we can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases can handle more traffic by sharding, or adding more servers in your NoSQL database. <br />SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance). </p>


                <h2>What is the purpose of jwt and how does it work</h2>
                <p className='mx-5'>JWT is contained with a set of claims such us- who issued the token, how long it is valid for, or what permissions the client has been granted for useing the website. <br />One part of the JWT token is the payload which contains the claims. This information is typically used by the server to verify that the user has permission to perform the action they are requesting. The other part is the signature that ensures the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. </p>


            </div>
        </div>
    );
};

export default Blogs;