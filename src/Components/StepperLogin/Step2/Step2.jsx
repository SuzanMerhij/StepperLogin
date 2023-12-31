// import './Step2.css'
// import './../Step1/Step1.css'
import './../../StepperLogin/StepperLogin.css'
function Step2(props) {
    function handleInputValue(e) {
        const target = e.target;
        const { name, value } = target;
        props.setInputValues(element => ({ ...props.InputValues, [name]: value }));
    }

    return (
        <div>
            <div className="Ah-container">
                <div className="Ah-container-white">
                    <div className="Ah-title">
                        <p>Contact Information</p>
                    </div>
                    <form action="">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 d-flex flex-column mb-2">
                                <label className='mb-1 star'>Phone Number</label>
                                <input
                                    type="tel"
                                    pattern='[0-9]*'
                                    onChange={handleInputValue}
                                    name='Phone_Number'
                                    value={props.InputValues?.Phone_Number ?? ''}
                                    placeholder='+963-'

                                />
                            </div>
                            <div className="col-lg-6 col-sm-12 d-flex flex-column mb-2">
                                <label className='mb-1'>Company Website</label>
                                <input
                                    type="text"
                                    name='Company_Website'
                                    value={props.InputValues?.Company_Website ?? ''}
                                    onChange={handleInputValue}
                                    placeholder='Example: www.focal-x.com'

                                />
                            </div>
                            <div className="col-lg-6 col-sm-12 d-flex flex-column mb-2">
                                <label className='mb-1'>Facebook Account</label>
                                <input
                                    type="email"
                                    name='Facebook_Account'
                                    placeholder='Example: @taplin_33'
                                    onChange={handleInputValue}
                                    value={props.InputValues?.Facebook_Account ?? ''}
                                />
                            </div>
                            <div className='col-lg-6 col-sm-12 d-flex flex-column mb-2'>
                                <label className='mb-1'>Behance Account</label>
                                <input
                                    type="email"
                                    name='Behance_Account'
                                    placeholder='Example: @taplin_33'
                                    onChange={handleInputValue}
                                    value={props.InputValues?.Behance_Account ?? ''}
                                />
                            </div>
                            <div className="col-lg-6 col-sm-12 d-flex flex-column mb-2">
                                <label className='mb-1'>Linked-in Account</label>
                                <input
                                    type="email"
                                    name='Linked_in_Account'
                                    value={props.InputValues?.Linked_in_Account ?? ''}
                                    placeholder='Example: @taplin_33 '
                                    onChange={handleInputValue}
                                />
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Step2