import "./Keys.css"
 
function Keys({position, img, para}: {position: string ,img: string, para: string}) {
  return (
    <div className={`key-para-container ${position === "right" ? "reverse" : ""}`}>
        {
            position === "left" ? (
                <>
                    <img src={img} alt="logo" />
                    <div className="key-para">
                        {para}
                    </div>
                </>
            ) : (
                <>
                    <div className="key-para">
                    {para}
                    </div>
                    <img src={img} alt="logo" />
                </>
            )
        }
    </div>
  )
}

export default Keys