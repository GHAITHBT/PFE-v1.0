import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle } from 'react-bootstrap'
import axios from 'axios'

export const Employee = () => {
    const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const handleViewShow = () => { SetViewShow(true) }
    const hanldeViewClose = () => { SetViewShow(false) }
    //FOr Edit Model
    const [ViewEdit, SetEditShow] = useState(false)
    const handleEditShow = () => { SetEditShow(true) }
    const hanldeEditClose = () => { SetEditShow(false) }
    //FOr Delete Model
    const [ViewDelete, SetDeleteShow] = useState(false)
    const handleDeleteShow = () => { SetDeleteShow(true) }
    const hanldeDeleteClose = () => { SetDeleteShow(false) }
    //FOr Add New Data Model
    const [ViewPost, SetPostShow] = useState(false)
    const handlePostShow = () => { SetPostShow(true) }
    const hanldePostClose = () => { SetPostShow(false) }

    //Define here local state that store the form Data
    const [fullName, setfullName] = useState("")
    const [email, setemail] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [password, setpassword] = useState("")
    const [address, setaddress] = useState("")
    const [Role, setRole] = useState("")

    const [Delete,setDelete] = useState(false)
    //Id for update record and Delete
    const [id,setId] = useState("");
    const GetEmployeeData = () => {
        //here we will get all employee data
        const url = 'http://169.254.160.216:5001/users'
        axios.get(url)
            .then(response => {
                const result = response.data;
                setData(result)

                    console.log(result)
                
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleSubmite = () => {
        const url = 'http://localhost:5001/add_user'
        const Credentials = { fullName, email, phoneNumber, address ,password,Role}
        axios.post(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                
                    window.location.reload()
                
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    const handleEdit = () =>{
        const url = `http://169.254.160.216:5001/modify_contact/${id}`
        const Credentials = { fullName, email, phoneNumber, address }
        axios.put(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                
                    window.location.reload()
                
            })
            .catch(err => {
                console.log(err)
            })
    }
    //handle Delete Function 
    const handleDelete = () =>{
        const url = `http://169.254.160.216:5001/delete_user/${id}`
        axios.delete(url)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    //call this function in useEffect
    console.log(ViewShow, RowData)
    useEffect(() => {
        GetEmployeeData();
    }, [])
    return (
        <div>
            <div>
                <div>
                    <Button variant='dark' style={{marginLeft:"500px",marginTop:"10px"}} onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
                        Add New Employee
                    </Button>
                    <hr></hr>
                </div>
            </div>
            <div>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>fullName</th>
                                <th>Email</th>
                                <th>Number</th>
                                <th>Address</th>
                                <th>Password</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.fullName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>{item.address}</td>
                                    <td>{item.password}</td>
                                    <td>{item.Role}</td>
                                    <td style={{ minWidth: 190 }}>
                                        <Button size='sm' variant='dark' onClick={() => { handleViewShow(SetRowData(item)) }}>View</Button>|
                                        <Button size='sm' variant='dark' onClick={()=> {handleEditShow(SetRowData(item),setId(item._id))}}>Edit</Button>|
                                        <Button size='sm' variant='dark' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Delete</Button>|
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* View Modal */}
            <div className='model-box-view'>
                <Modal
                    show={ViewShow}
                    onHide={hanldeViewClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>View Employee Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' value={RowData.fullName} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' value={RowData.email} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.phoneNumber} readOnly />
                            </div>
                            
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.address} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.password} readOnly />
                            </div>
                            
                            {
                                Delete && (
                                    <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete}>Delete Employee</Button>
                                )
                            }
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeViewClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal for submit data to database */}
            <div className='model-box-view'>
                <Modal
                    show={ViewPost}
                    onHide={hanldePostClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add new Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(e) => setfullName(e.target.value)} placeholder="Please enter Name" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="Please enter email" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setphoneNumber(e.target.value)} placeholder="Please enter Number" />
                            </div>
                           
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Please enter Address" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setpassword(e.target.value)} placeholder="Please enter password" />
                            </div>
                            <div className='form-group mt-3'>
                            <b> Rôle</b> : <br></br>
                                <input type="radio" value="Admin"  style={{marginLeft:"150px"}} onChange={(e) => setRole(e.target.value)}/><b>Admin</b> 
                                <input type="radio" value="Employé"  style={{marginLeft:"20px"}} onChange={(e) => setRole(e.target.value)}/><b>Employé</b>
                                <input type="radio" value="Cassier"  style={{marginLeft:"20px"}} onChange={(e) => setRole(e.target.value)}/><b>Cassier</b>

                            </div>
                            
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmite}>Add Employee</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldePostClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal for Edit employee record */}
            <div className='model-box-view'>
                <Modal
                    show={ViewEdit}
                    onHide={hanldeEditClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <label>Name</label>
                                <input type="text" className='form-control' onChange={(e) => setfullName(e.target.value)} placeholder="Please enter Name" defaultValue={RowData.fullName}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Email</label>
                                <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="Please enter email" defaultValue={RowData.email} />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Number</label>
                                <input type="text" className='form-control' onChange={(e) => setphoneNumber(e.target.value)} placeholder="Please enter Number" defaultValue={RowData.phoneNumber}/>
                            </div>
                           
                            <div className='form-group mt-3'>
                                <label>Address</label>
                                <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Please enter Address" defaultValue={RowData.address}/>
                                </div>
                                <div>
                                <label>password</label>
                                <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Please enter Address" defaultValue={RowData.password}/>
                            </div>
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Edit Employee</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeEditClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

