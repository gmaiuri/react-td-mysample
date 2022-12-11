function Condition() {
    const monBooleen = false;
    return (
        <div>
            {monBooleen
                ? <p>Oh yeah!, ma page est ouverte :D</p>
                : <p>Oh noonnn, ma page est fermée :/</p>
            }
        </div>
    );
}

export default Condition;
