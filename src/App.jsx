import {useState} from 'react'
import './App.css'

function App() {
    const rows = 3;
    const numBoxes = rows * rows;

    //   0       1      2   ...  8
    // [false, false, false....false]
    const [boxesArray, setBoxesArray] = useState(Array(numBoxes).fill(false));


    const toggleColor = (index) => {
        setBoxesArray((prevSelected) => {
            const newBoxesArray = [...prevSelected];
            newBoxesArray[index] = !newBoxesArray[index];
            return newBoxesArray;
        });
    };

    const handleClick = (index) => {
        const col = index % rows;
        const fourDirections = {
            up: index - rows,
            down: index + rows,
            left: index - 1,
            right: index + 1,
        };

        toggleColor(index);

        if (fourDirections.up >= 0) toggleColor(fourDirections.up);
        if (fourDirections.down < numBoxes) toggleColor(fourDirections.down);
        if (col > 0) toggleColor(fourDirections.left);
        if (col < rows - 1) toggleColor(fourDirections.right);
    };

    return (
        <>
            <div className="container">
                {Array.from({ length: numBoxes }).map((_, index) => (
                    <div
                        key={index}
                        className={`box ${boxesArray[index] ? 'selected' : ''}`}
                        onClick={() => handleClick(index)}
                    ></div>
                ))}

            </div>
        </>
    )
}

export default App
