import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle } from 'react-bootstrap'
import axios from 'axios'
import Toolbar from '../Toolbar/Toolbar';
import DatePicker from "react-datepicker";

const Employee = () => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },}
    const [Data, setData] = useState([]);
    const [DataFour, setDataFour] = useState([]);
    const [DataBS, setDataBS] = useState([]);
    const [Date, setDate] = useState();

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
    //FOr Add New Data Model
    const [ViewPostfour, SetPostShowfour] = useState(false)
    const handlePostShowfour = () => { SetPostShowfour(true) }
    const hanldePostClosefour = () => { SetPostShowfour(false) }

    const [ViewPostBL, SetPostShowBL] = useState(false)
    const handlePostShowBL = () => { SetPostShowBL(true) }
    const hanldePostCloseBL = () => { SetPostShowBL(false) }
    const [ViewPostBS, SetPostShowBS] = useState(false)
    const handlePostShowBS = () => { SetPostShowBS(true) }
    const hanldePostCloseBS = () => { SetPostShowBS(false) }

    //Define here local state that store the form Data
    const [fullName, setfullName] = useState("")
    const [email, setemail] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [password, setpassword] = useState("")
    const [address, setaddress] = useState("")
    const [Delete,setDelete] = useState(false)
    //Id for update record and Delete
    const [id,setId] = useState("");
    //Define here local state that store the form Data
    const [fournisseur, setfournisseur] = useState("")
    const [Réference, setRéference] = useState("")
    const [PrixAchat, setPrixAchat] = useState("")
    const [PrixVente, setPrixVente] = useState("")
    const [Quantité, setQuantité] = useState("")
    const [Vente, setVente] = useState("")


    const [idart, setidart] = useState("")

    const [CodeArticle, setCodeArticle] = useState("")
    const [CdArt, setCdArt] = useState("")

    const [Description, setDescription] = useState("")
    //Id for update record and Delete
    const [idFour,setIdFour] = useState("");
    const GetEmployeeData = () => {
        //here we will get all employee data
        const url = 'http://localhost:5001/Article'
        axios.get(url)
            .then(response => {
                setData(response.data)
                    console.log(test)
                
            })
            .catch(err => {
                console.log(err)
            })
        }
        const GetFournisseurData = () => {
            //here we will get all employee data
            const url = 'http://localhost:5001/Fournisseur'
            axios.get(url)
                .then(response => {
                    const result = response.data;
                    setDataFour(result)
                        console.log(url)
                    
                })
                .catch(err => {
                    console.log(err)
                })
        }
        const GetDataBS = () => {
            //here we will get all employee data
            const url = `http://localhost:5001/BS/${CodeArticle}/${Réference}`
            axios.get(url)
                .then(response => {
                    const result = response.data;
DataBS.push(response.data)
window.reload()
                        console.log(DataBS)
                    
                })
                .catch(err => {
                    console.log(err)
                })
        }
    const handleSubmite = () => {
        const url = 'http://localhost:5001/add_Article'
        const Credentials = { CodeArticle, Description}
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
    const handleFourn = () => {
        const url = 'http://localhost:5001/add_Fournisseur'
        const Credentials = { fournisseur, Réference,PrixAchat, PrixVente,idart}
        axios.post(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                
                    window.location.reload()
                
            })
            .catch(err => {
                console.log(err)
            })}
    const handleEdit = () =>{
        const url = `http://localhost:5001/modify_contact/${id}`
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
    const handleBL = () =>{
        const url = `http://localhost:5001/BL/${Réference}/${CodeArticle}`
        const Credentials = { CodeArticle, Réference, PrixAchat, PrixVente, Quantité }
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
        const url = `http://localhost:5001/delete_user/${id}`
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
        GetFournisseurData();
    }, [])
    
    return (
        <div >
            <Toolbar/>
            <div className='row'>
                <div className='mt-5 mb-4'>
                    <Button variant='primary' onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
                        Ajouter Article
                    </Button>
                    <Button variant='secondary' onClick={() => { handlePostShowfour() }}><i className='fa fa-plu'></i>
                        Ajouter Fournisseur
                    </Button>
                    <Button variant='warning' onClick={() => { handlePostShowBL() }}><i className='fa fa-plu'></i>
                    Bon Livraison
                    </Button>
                    <Button variant='warning' onClick={() => { handlePostShowBS() }}><i className='fa fa-plu'></i>
                    Bon de sortie
                    </Button>

                </div>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>code Article</th>
                                <th>Description</th>
                                <th>Fournisseur</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.CodeArticle}</td>
                                    <td>{item.Description}</td>
                                    <td><table className='table table-striped table-hover table-bordered'>
                        <thead>
                        
                            <tr>
                            
                                <th>Fournisseur</th>
                                <th>Réference</th>
                                <th>Prix Achat</th>
                                <th>Prix Vente</th>
                                <th>Quantité</th>
                                <th>Vente</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {DataFour.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.fournisseur}</td>
                                    <td>{item.Réference}</td>
                                    <td>{item.PrixAchat}</td>
                                    <td>{item.PrixVente}</td>
                                    <td>{item.Quantité}</td>
                                    <td>Working on it</td>
                                    
                                    <td style={{ minWidth: 190 }}>
                                        
                                        <Button size='sm' variant='warning' onClick={()=> {handleEditShow(SetRowData(item),setId(item._id))}}>Edit</Button>|
                                        <Button size='sm' variant='danger' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Delete</Button>|
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table></td>
                                    <td style={{ minWidth: 190 }}>
                                        <Button size='sm' variant='primary' onClick={() => { handleViewShow(SetRowData(item)) }}>View</Button>|
                                        <Button size='sm' variant='warning' onClick={()=> {handleEditShow(SetRowData(item),setId(item._id))}}>Edit</Button>|
                                        <Button size='sm' variant='danger' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Delete</Button>|
                                        
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
                                <input type="text" className='form-control' value={RowData.CodeArticle} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' value={RowData.Description} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData._id} readOnly />
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
                        <Modal.Title>Ajouter Article</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(e) => setCodeArticle(e.target.value)} placeholder="Please enter Name" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' onChange={(e) => setDescription(e.target.value)} placeholder="Please enter email" />
                            </div>
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmite}>Add Employee</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldePostClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </div>
{/*****************************************************************************************************************/}

                <div className='model-box-view'>
                <Modal
                    show={ViewPostfour}
                    onHide={hanldePostClosefour}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Ajouter Fournisseur</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(a) => setfournisseur(a.target.value)} placeholder="Fournisseur" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' onChange={(a) => setRéference(a.target.value)} placeholder="Réference" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(a) => setPrixAchat(a.target.value)} placeholder="Prix Achat" />
                            </div>
                           
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(a) => setPrixVente(a.target.value)} placeholder="Prix Vente" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(a) => setidart(a.target.value)} placeholder="Prix Vente" />
                            </div>
                           
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleFourn}> Ajouter Fournisseur</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldePostClosefour}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </div>

                
{/*****************************************************************************************************************/} 

{/*****************************************************************************************************************/}

<div className='model-box-view'>
                <Modal
                    show={ViewPostBL}
                    onHide={hanldePostCloseBL}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Bon Livraison</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(a) => setCodeArticle(a.target.value)} placeholder="Code Article" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' onChange={(a) => setRéference(a.target.value)} placeholder="Réference Fournisseur" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(a) => setPrixAchat(a.target.value)} placeholder="Prix Achat" />
                            </div>
                           
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(a) => setPrixVente(a.target.value)} placeholder="Prix Vente" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(a) => setQuantité(a.target.value)} placeholder="Quantité" />
                            </div>
                           
                           
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleBL}> Valider</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldePostCloseBL}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </div>

                
{/*****************************************************************************************************************/} 

{/*****************************************************************************************************************/}

<div className='model-box-view'>
                <Modal
                    show={ViewPostBS}
                    onHide={hanldePostCloseBS}
                    backdrop="static"
                    keyboard={false}
                    size='lg'
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Bon de sortie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(a) => setCodeArticle(a.target.value)} placeholder="Code Article" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' onChange={(a) => setRéference(a.target.value)} placeholder="Réference Fournisseur" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(a) => setPrixAchat(a.target.value)} placeholder="Prix Achat" />
                            </div>
                           
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(a) => setPrixVente(a.target.value)} placeholder="Quantité" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(a) => setPrixVente(a.target.value)} placeholder="Quantité" />
                            </div>
                           
                            <table className='table table-striped table-hover table-bordered'>
                        <thead>
                        
                            <tr>

                                <th>Article</th>
                                <th>Fournisseur</th>
                                <th>Réference</th>
                                <th>Quantité</th>
                               

                            </tr>
                        </thead>
                            <tbody>
                            {DataBS.map((item) =>
                                <tr key={item._id}>
                                    <td>Working on it</td>
                                    <td>{item.fournisseur}</td>
                                    <td>{item.Réference}</td>
                                    <td>{item.Quantité}</td>
                                    
                                    <td>
                                        
                    
                                        <Button size='sm' variant='danger' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Delete</Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                            </table>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(a) => setDate(a.target.value)} placeholder="Date" />
                            </div>
                           
                            <Button type='submit' className='btn btn-success mt-4' onClick={GetDataBS}> ADD</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button type='submit' className='btn btn-success mt-4' onClick={handleBL}> Valider</Button>

                        <Button variant='secondary' onClick={hanldePostCloseBS}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </div>

                
{/*****************************************************************************************************************/} 

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

export default Employee;