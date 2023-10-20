

const ToggleMode = () => {
    let isBlack = false; // Initial state

    const handleToggle = () => {
        const body = document.body;

        if (isBlack) {
            body.style.backgroundColor = '#000000';
            body.style.color = 'white';
        } else {
            body.style.backgroundColor = 'white';
            body.style.color = '#000000';
        }

        isBlack = !isBlack; // Toggle the state
    }
    handleToggle();
    return (
        <>
            <button className="btn btn-primary absolute right-0" onClick={handleToggle}>Toggler</button>
        </>
    );
};

export default ToggleMode;