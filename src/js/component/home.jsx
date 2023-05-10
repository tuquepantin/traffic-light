import React, {useState} from "react";

const Home = () => {
	
	const [ color, setColor] = useState("");
	
	return (
		<>
	        <div className="contorno position-absolute top-50 start-50 translate-middle">
                <div 
				    onClick={()=> setColor("rojo")}
				    className={"luz rojo mx-auto"+((color === "rojo") ? " brillo" : "")}>

					</div>
				<div 
				    onClick={()=> setColor("amarillo")}
				    className={"luz amarillo mx-auto"+((color === "amarillo") ? " brillo" : "")}>

					</div>
				<div 
				    onClick={()=> setColor("verde")}
				    className={"luz verde mx-auto"+((color === "verde") ? " brillo" : "")}>

					</div>
			</div>
        </>
	);
};

export default Home;
