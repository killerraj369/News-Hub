import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import ScrollToTopButton from "./Scrolltop";


function Fetchdata({ cat }) {
    const [mydata, setData] = useState("")

    async function fetchdata() {

        let link = "https://newsapi.org/v2/top-headlines?country=in&apiKey=85553f3e5b604f4db3d8addfd9b69971";
        if (cat) {
            link = `https://newsapi.org/v2/everything?q=${cat}&sortBy=popularity&apiKey=85553f3e5b604f4db3d8addfd9b69971`;
        }


        console.log(link);
        await axios.get(link)
            .then((e) => {
                // console.log(e.data.articles)
                setData(e.data.articles)
            })
    }

    // to fetch data after the component loads using useEffect hook
    useEffect(() => {
        fetchdata();
    }, [cat])

    return (
        <>
            <div className="container my-4">
                <h3><u><a href=""> <b>TOP HEADLINES OF THE DAY</b></a></u> </h3>

            </div>

            <div className="mainPage" style={{display:"flex",}}>
 

            <div className="container c-flex justify-content-center align-items-center " style={{ float:"left", minHeight: "100vh" }} >
                {mydata ? (
                    mydata.map((data) => {
                        return (
                            <>
                                {/* <div className="container my-5 py-2 px-2 d-flex flex-column justify-content-center align-items-center" style={{ boxShadow: "1px 1px 5px black", maxWidth: "900px" }}>
                                    <h2 style={{ marginBottom: "20px",marginTop:"10px", textAlign: "center" }}><b> {data.title}</b></h2>
                                    <div className="photo" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
                                        <img alt="loading" src={data.urlToImage} style={{boxShadow: "2px 2px 15px ", maxWidth: "90%", maxHeight: "50%", width: "auto", height: "auto" }} />
                                    </div>
                                    <div style={{ width: "100%", textAlign:"center" }}>
                                        <p style={{ margin: "10px", maxWidth: "90%", display: "inline-block" }}>{data.description}{data.content}</p>
                                    </div>
                                    <pre style={{ textAlign: "center" }}><a href={data.url}>Click to View More..</a></pre>
                                </div> */}

<div className="container my-5 py-2 px-2 d-flex flex-column justify-content-center align-items-center" style={{ boxShadow: "1px 1px 5px black", maxWidth: "900px" }}>
  <h2 style={{ marginBottom: "20px", marginTop: "10px", textAlign: "center" }}><b>{data.title}</b></h2>

  
  
    <div className="photo" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
    <img alt="loading" src={data.urlToImage} style={{ boxShadow: "2px 2px 15px", maxWidth: "100%", maxHeight: "400px", width: "auto", height: "auto", objectFit: "contain" }} />
  </div>
  
  
  <div style={{ width: "100%", textAlign: "center" }}>
    <p style={{ margin: "10px", maxWidth: "90%", display: "inline-block" }}>{data.description}{data.content}</p>
  </div>
  <div style={{ textAlign: "center" }}>
    <a href={data.url} style={{ textDecoration: "none", fontWeight: "bold" }}>Click to View More..</a>
  </div>
</div>






                            </>




                        )


                    })
                ) : (
                    <h5>loading</h5>
                )}
            </div>
            </div>
           
           {/* Right Component
 <div className="rightbar" style={{ 
                float:"right",
  top: "0",
  right: "0",
  width: "300px",
  height: "100%",
  backgroundcolor:"#f1f1f1",
  padding: "20px"}}>

                <h1>sdhkjdshfkj</h1>
                <h1>sdhkjdshfkj</h1>
                <h1>sdhkjdshfkj</h1>
                <h1>sdhkjdshfkj</h1>
                <h1>sdhkjdshfkj</h1>
                <h1>sdhkjdshfkj</h1>

            </div>s */}

        <ScrollToTopButton/>
        </>
    )
}

export default Fetchdata