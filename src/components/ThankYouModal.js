import React from 'react';

const ThankYouModal = () => {
    return (
        <>
            {/* <!-- The Modal --> */}
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">

                            {/* <button type="button" className="close" data-dismiss="modal">&times;</button> */}
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <h3 className="modal-title">Thank You!</h3>
                            <p> We have received your message and will be in touch shortly</p>
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">OK</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default ThankYouModal;
