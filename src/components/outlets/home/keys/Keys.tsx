import "./Keys.css"
 
function Keys({position, img, head, headColor, para}: {position: string ,img: string, head: string, headColor: string , para: string}) {
  return (
    <div className={`key-container ${position === "right" ? "reverse" : ""}`}>
        {
            position === "left" ? (
                <>
                    <div className="key-img-container">
                        <img src={img} alt="logo" />
                    </div>
                    <div className="key-content">
                        <div className="key-head" style={{color: headColor}} >
                            <span>{head}</span>
                        </div>
                        <div className="key-para">
                            <p>{para}</p>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="key-content">
                        <div className="key-head" style={{color: headColor}}>
                            <span>{head}</span>
                        </div>
                        <div className="key-para">
                            <p>{para}</p>
                        </div>
                    </div>
                    <div className="key-img-container">
                        <img src={img} alt="logo" />
                    </div>
                </>
            )
        }
    </div>
  )
}

export default Keys