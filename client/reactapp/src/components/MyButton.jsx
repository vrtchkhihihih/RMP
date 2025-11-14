export const MyButton = () => {
    const handleClick = () => {
        alert("нажато!")
    }

    return ( <>
        <button className = "btn" onClick={handleClick}>Click</button>


    </>
    )


}