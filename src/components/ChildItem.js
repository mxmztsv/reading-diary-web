

export const ChildItem = ({ name, surname, midname, id, onClick }) => {

    return (
        <div className="child-item" onClick={onClick}>
            <span className='child-item_name'>{name}</span>
            <span className='child-item_name'>{midname}</span>
            <span className='child-item_name'>{surname}</span>
            <span className='child-item_id'>{'ID#' + id}</span>
        </div>
    )
}
