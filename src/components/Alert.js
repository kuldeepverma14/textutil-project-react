import React from 'react'

function Alert(props) {
    const capitalise = (word) => {
    //     const lowerCase = word.toLowerCase()
    //    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)
       return word.charAt(0).toUpperCase() + word.slice(1)
    }
    return (
        <div style = {{height : `70px`}}>
            {props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert"><br />
                <strong>{capitalise(props.alert.type)} : </strong>{props.alert.msg}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
            }
        </div>
    )
}

export default Alert