const Filter = ({ onChange, value }) => {
    return (
        <label>
            Find contacts by name
            <input
                className="filter"
                type="text"
                onChange={onChange}
                value={value}
            />
        </label>
    )
}

export default Filter;