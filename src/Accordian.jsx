import { useState } from "react"

function Accordian() {
    const [accordians, setAccordians] = useState([{ title: "loreal", content: "loeral 1 vip", show: false },
        { title: "loreal", content: "loeral 2 vip", show: false },
        { title: "loreal", content: "loeral 3 vip", show: false },
        { title: "loreal", content: "loeral 4 vip", show: false }
    ])
    const [valIndex,setValIndex] = useState()
    return (
        <div className="accordian-container">
            {accordians?.map((accordian, index) => {
                return (
                    <div className="div-accordian">
                        <div className="title-accordian">
                            <div>{accordian?.title} </div>
                            <button onClick={() => {
                                setValIndex(index)
                                let _accordian = [...accordians]
                                _accordian[index].show = !_accordian[index].show
                                _accordian[valIndex].show = false
                                setAccordians(_accordian)
                            }}>Show</button>
                        </div>
                        {accordian.show ? <div className="content-accordian">
                            {accordian.content}
                        </div> : ""}
                    </div>
                )
            })}
        </div>
    )
}
export default Accordian