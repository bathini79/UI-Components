import { useState } from "react"

function Corousal() {
    const [slide, setSlide] = useState(["Slide1", "Slide2", "Slide3"])
    const [slideIndex, setSlideIndex] = useState(0)
    return (
        <div className="corousal-container">
            <div className="slide-div">
                <button
                    className="corousal-btn"
                    onClick={() => {
                        if (slideIndex == 0) {
                            setSlideIndex(slide.length - 1)
                        } else {
                            setSlideIndex(slideIndex - 1)
                        }
                    }}>&lt;</button>
                <div className="corousal-text">
                    {slide[slideIndex]}
                </div>
                <div>
                    <button
                        className="corousal-btn  right"
                        onClick={() => {
                            if (slideIndex == slide.length - 1) {
                                setSlideIndex(0)
                            } else {
                                setSlideIndex(slideIndex + 1)
                            }
                        }}
                    >&gt;</button>
                </div>
            </div>
        </div>
    )
}
export default Corousal