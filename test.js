import { Directions } from "@mui/icons-material"
import { yellow } from "@mui/material/colors"
import React from "react"
// import { useNavigate, Link } from "react-router-dom"
// import Header from "./Header"
// import Footer from "./Footer"
// import Footer2 from "./Footer2"



const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}



const Home = ({ user }) => {
    // const navigate = useNavigate()
    return user ? (

        <>
            <nav className="bannercolor">
                <ul>
                    <li><a href="">문의사항</a></li>
                    <li><a href="">Credit 시스템이란</a></li>
                    <li><a href="">Osc 관련 기사</a></li>
                </ul>
            </nav>
            <div className="location">
                {/* <Header /> */}
                <div style={{ position: "relative" }}>
                    <br></br>
                    {/* <img className="fly4" src="img/iceberg.png"></img> */}

                    <div className="flytext" style={{ color: "white", position: "absolute", width: "100%", height: "100%", top: 0, left: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
                        크레딧 구매를 통해서 <br>
                        </br>osc의 다양한 서비스를
                        <br></br>이용하실 수 있습니다.</div></div>
                <br></br>

                {/* <button className="button1" onClick={() => navigate("/credit")} >크레딧 구매</button> */}
                {/* <button className="button2" onClick={() => navigate("/services")}>상품 구매</button> */}

                {/* <Footer /> */}
            </div>
        </>
    ) : (

        <>
            {/* <Header /> */}
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                    <img className="fly" id="image" src="https://source.unsplash.com/bGeupv246bM"></img>
                    <font color="grey">전화 서비스</font>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img className="fly" id="image" src="https://source.unsplash.com/wUZjnOv7t0g"></img>
                    <div> 방문 상담 서비스</div>
                </div>
            </div>


            {/* <Footer /> */}
        </>



    )
}

export default Home;