import { useState } from "react"
import { Output } from "./Output"

const Input = () => {

    const [heightFeet, setHeightFeet] = useState("")
    const [heightInches, setHeightInches] = useState("")
    const [weight, setWeight] = useState("")
    const [output1, setOutput1] = useState("")

    const handleData = (e) => {
        e.preventDefault()

        let hightMeters = (Number(heightFeet) / 3.281) + (Number(heightInches) / 39.37)
        let BMI = Number(weight) / (hightMeters * hightMeters)

        setOutput1(BMI)
        console.log(BMI)
    }

    return (
        <div style={{ maxWidth: "50%", margin: "80px auto" }}>
            <form>
            <div class="input-group">
                <span class="input-group-text">Feet and Inches</span>
                <input type="text" aria-label="First name" class="form-control"
                value={heightFeet}
                onChange={ (e) => setHeightFeet(e.target.value)}
                />
                <input type="text" aria-label="Last name" class="form-control"
                value={heightInches}
                onChange={ (e) => setHeightInches(e.target.value)}
                />
            </div>
            <div style={{ marginTop: "20px" }} class="input-group">
                <span class="input-group-text">Weight</span>
                <input type="text" aria-label="First name" class="form-control"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <button style={{ marginTop: "20px" }} onClick={handleData} type="button" class="btn btn-primary">Get BMI</button>
        </form>
        <Output data={output1} />
        </div>
    )
}

export default Input