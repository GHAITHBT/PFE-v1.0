import React, { useEffect, useState,useRef,Component } from 'react';
import { Button, Modal, ModalTitle,Table } from 'react-bootstrap'
import axios from 'axios'
import Toolbar from '../Toolbar/Toolbar';
import ReactToPrint from "react-to-print";

export const Article = () => {
    let componentRef = useRef();
    const [Data, setData] = useState([]);
    const [CAR, setCAR] = useState("");
var idtest=''
var CodeA=''
console.log("codeA now ",CodeA)
//var idtest=''
const [fullscreen, setFullscreen] = useState(true);

    const [DataFour, setDataFour] = useState([]);
    const [Four, setFour] = useState([]);
    const [Adresse, setAdresse] = useState("");
    const [Téléphone, setTéléphone] = useState(0);
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
    const [ViewListFour, SetListFour] = useState(false)
    const handleListFour = () => { SetListFour(true) }
    const hanldeListFourClose = () => { SetListFour(false) }
    const [ViewEditFR, SetEditShowFR] = useState(false)
    const handleEditShowFR = () => { SetEditShowFR(true) }
    const hanldeEditCloseFR = () => { SetEditShowFR(false) }
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
    const [row,setrow] = useState([]);
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
    const [DescriptionBS, setDescriptionBS] = useState("")

    //Id for update record and Delete
    const [idFour,setIdFour] = useState("");

    
   /************************************************************************************************************/
    /************************************************************************************************************/
    function GetArticlebyid ()  {
        //here we will get all employee data
        const url = `http://169.254.160.216:5001/Articlebyid/${idtest}`
        axios.get(url)
            .then(response => {
                CodeA=response.data.CodeArticle
                    console.log('CodeA in func',CodeA)
               console.log("article called",response.data.CodeArticle)
               GetFournisseurData()
            })
           
        }
    /************************************************************************************************************/
    /************************************************************************************************************/
    const GetEmployeeData = () => {
        //here we will get all employee data
        const url = 'http://169.254.160.216:5001/Article'
        axios.get(url)
            .then(response => {
                setData(response.data)
                    console.log(test)
                
            })
            .catch(err => {
                console.log(err)
            })
        }
/************************************************************************************************************/
/********************************************************************************************************/        
        function GetFournisseurData  ()  {
            //here we will get all employee data
            const url = `http://169.254.160.216:5001/Fournisseur/`+CodeA
            axios.get(url)
                .then(response => {
                    const result = response.data;
                    setFour(result)
                        console.log('url is ',url)
                        console.log('car in req',CAR)
                    console.log('Fournisseur called')
                })
                .catch(err => {
                    console.log(err)
                })
                
        }
 /************************************************************************************************************/   /************************************************************************************************************/
        const AddBS = () => {
            const url = 'http://169.254.160.216:5001/add_BS'
            const Credentials = { CodeArticle, Description,fournisseur,Quantité}
            const urlA = `http://169.254.160.216:5001/Article/${CodeArticle}`
            axios.get(urlA)
            .then(response => {
                const result = response.data;
                setDescriptionBS(result.Description)                    
                   // window.location.reload()
                   console.log(DescriptionBS)
                
            })
            .catch(err => {
                console.log(err)
            })
        axios.post(url, Credentials)
        .then(response => {
            const result = response.data;
            const { status, message, data } = result;
            
            })}
            
/************************************************************************************************************/
/************************************************************************************************************/
        const GetDataBS = () => {
            //here we will get all employee data
            const url = `http://169.254.160.216:5001/BS/${CodeArticle}/${Réference}`
            const urlG = 'http://169.254.160.216:5001/BS'
            
        
            axios.get(url)
                .then(response => {
                    const result = response.data;
                
                setCodeArticle(result.CodeArticle)
                setfournisseur(result.fournisseur)
                setCodeArticle(result.Quantité)
                })
                AddBS()
             axios.get(urlG)
                .then(response => {
                setDataBS(response.data)
                    console.log(DataBS)
            })

                }
/************************************************************************************************************/
 /************************************************************************************************************/
    const handleSubmite = () => {
        const url = 'http://169.254.160.216:5001/add_Article'
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
    /************************************************************************************************************/
    /************************************************************************************************************/
    const handleFourn = () => {
        const url = 'http://169.254.160.216:5001/add_Fournisseur'
        const Credentials = { fournisseur, Réference,Adresse, Téléphone,CodeArticle}
        axios.post(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                
                    window.location.reload()
                
            })
            .catch(err => {
                console.log(err)
            })
        handleSubmite()}
 /************************************************************************************************************/
/****************************************************************************************************/            
    const handleEditFOUR = () =>{
        const url = `http://169.254.160.216:5001/EDITFOUR/${id}`
        const Credentials = { fournisseur, Réference, PrixAchat, PrixVente,Quantité,Vente }
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
    
/************************************************************************************************************/
/****************************************************************************************************/            
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
    /************************************************************************************************************/
    /************************************************************************************************************/
    const handleBL = () =>{
        const url = `http://169.254.160.216:5001/BL/${Réference}/${CodeArticle}`
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
/************************************************************************************************************/
/************************************************************************************************************/    const handleDelete = () =>{
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
/************************************************************************************************************/
/************************************************************************************************************/
    const handleDeleteBS = () =>{
        const url = `http://169.254.160.216:5001/BSDELETE/`
        axios.delete(url)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
            })
            .catch(err => {
                console.log(err)
            })
    }
    //call this function in useEffect
    //console.log(ViewShow, RowData)
   
    
       
    
    useEffect(() => {
        GetEmployeeData();
       // GetFournisseurData()
   }, [])
  
    return (
        <div>
            <div>
                <div  style={{marginLeft: '390px',marginTop: '10px'}}>
                    <Button variant='dark' onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
                        Ajouter Article
                    </Button>
                   
                    
                    <span style={{marginLeft: '30px'}}>  <Button variant='dark' onClick={() => { handlePostShowBL() }}><i className='fa fa-plu'></i>
                    Bon Livraison
                    </Button></span>
                    <span style={{marginLeft: '30px'}}>  <Button variant='dark' onClick={() => { handlePostShowBS() }}><i className='fa fa-plu'></i>
                    Bon de sortie
                    </Button></span>

                </div>
            </div>
            <div >
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th >code Article</th>
                                <th >Description</th>
                                <th>Quantité Stock</th>
                                <th>Vente</th>
                                <th >Fournisseur</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data?.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.CodeArticle}</td>
                                    <td>{item.Description}</td>
                                    <td>{item.Description}</td>
                                    <td>{item.Description}</td>

                                    <td> <Button id='aj' size='sm' variant='dark' onClick={()=> {handleListFour( SetRowData(item),idtest=item._id,console.log('id',idtest),GetArticlebyid())}}>Afficher les fournisseurs</Button></td>


                                    <td style={{ minWidth: 190 }}>
                                       <center>
                                        <Button size='sm' variant='secondary' onClick={()=> {handleEditFOUR(SetRowData(item),setId(item._id))}}>Edit</Button>|
                                        <Button size='sm' variant='secondary' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Delete</Button>
                                        </center>
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
                    size="lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Ajouter Article</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table>
                        <tr>
                                <th> 
                                Article
                            
                                 </th>
                                 <th>
                                 Fournisseur
                                 </th>
                             </tr> 
                            <tr>
                                <td> 
                                <input type="text" className='form-control' onChange={(e) => setCodeArticle(e.target.value)} placeholder="Code Article" />
                            
                                 </td>
                                 <td>
                                 <input type="text" className='form-control' onChange={(a) => setfournisseur(a.target.value)} placeholder="Fournisseur" />
                                 </td>
                             </tr>  
                            <tr>
                            
                                <td>       
                                 <input type="email" className='form-control' onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                                 </td>
                                 <td>
                                <input type="email" className='form-control' onChange={(a) => setRéference(a.target.value)} placeholder="Réference" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <input type="text" className='form-control' onChange={(a) => setPrixAchat(a.target.value)} placeholder="Prix Achat" />
                                </td>
                                <td>
                                <input type="email" className='form-control' onChange={(a) => setAdresse(a.target.value)} placeholder="Adresse" />
                         </td>
                        </tr>
                            <tr>
                                <td>
                                <input type="text" className='form-control' onChange={(a) => setPrixVente(a.target.value)} placeholder="Prix Vente" />
                                </td>
                                <td> <input type="text" className='form-control' onChange={(a) => setTéléphone(a.target.value)} placeholder="Téléphone" /></td>
                                </tr>
                            
                           
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleFourn}> Ajouter</Button>
                        
                        </Table>
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
                                <input type="text" className='form-control' onChange={(a) => setAdresse(a.target.value)} placeholder="Adresse" />
                            </div>
                           
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(a) => setTéléphone(a.target.value)} placeholder="Téléphone" />
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
                    size="xl"
                       >
                    <Modal.Header closeButton>
                        <Modal.Title>Bon Livraison</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <Table>
                       
                                
                            <tr>
                                <td> 
                                <input type="text" className='form-control' onChange={(e) => setCodeArticle(e.target.value)} placeholder="N° " />
                            
                                 </td>
                                 </tr>
                                 <td>
                                 <input type="text" className='form-control' onChange={(a) => setfournisseur(a.target.value)} placeholder="Fournisseur" />
                                 </td>
                            <tr>
                            
                               
                                 <td>
                                <input type="email" className='form-control' onChange={(a) => setRéference(a.target.value)} placeholder="Réference" />
                                </td>
                            </tr>
                            <tr>
                                
                                <td>
                                <input type="email" className='form-control' onChange={(a) => setAdresse(a.target.value)} placeholder="Adresse" />
                         </td>
                        </tr>
                            <tr>
                                
                                <td> <input type="text" className='form-control' onChange={(a) => setTéléphone(a.target.value)} placeholder="Téléphone" /></td>
                                </tr>
                                </Table>
                                <Table>
                                <tr><th>Article</th></tr>
                                <tr>
                                <td> <input type="text" className='form-control' onChange={(a) => setTéléphone(a.target.value)} placeholder="Code Article" /></td>
                                <td> <input type="text" className='form-control' onChange={(a) => setTéléphone(a.target.value)} placeholder="Description" /></td>
                                <td> <input type="text" className='form-control' onChange={(a) => setTéléphone(a.target.value)} placeholder="Prix Achat" /></td>
                                </tr>
                            
                                <tbody>
                            {Data?.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.CodeArticle}</td>
                                    <td>{item.Description}</td>
                                    <td>{item.Description}</td>
                                    <td>{item.Description}</td>

                                    <td> <Button id='aj' size='sm' variant='dark' onClick={()=> {handleListFour( SetRowData(item),idtest=item._id,console.log('id',idtest),GetArticlebyid())}}>Afficher les fournisseurs</Button></td>


                                    <td style={{ minWidth: 190 }}>
                                       <center>
                                        <Button size='sm' variant='secondary' onClick={()=> {handleEditFOUR(SetRowData(item),setId(item._id))}}>Edit</Button>|
                                        <Button size='sm' variant='secondary' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Delete</Button>
                                        </center>
                                    </td>
                                    
                                </tr>
                            )}
                        </tbody>
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleFourn}> Ajouter</Button>
                        
                        </Table>
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
                           
                          
                        
                            <tbody>
                            {DataBS.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.CodeArticle}</td>
                                    <td>{item.Description}</td>
                                    <td>{item.fournisseur}</td>
                                    <td>{item.Quantité}</td>
                                    
                                    <td>
                                        
                    
                                        <Button size='sm' variant='danger' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Delete</Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(a) => setDate(a.target.value)} placeholder="Date" />
                            </div>
                           
                            <Button type='submit' className='btn btn-success mt-4' onClick={GetDataBS}> ADD</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <div>
        
      </div>
                    <Button type='submit' className='btn btn-success mt-4' onClick={handleDeleteBS}> Valider</Button>

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
        
 {/*****************************************************************************************************************/} 

           {/* Modal for Edit employee record */}
           <div className='model-box-view'>
           <Modal
               show={ViewEditFR}
               onHide={hanldeEditCloseFR}
               backdrop="static"
               keyboard={false}
           >
               <Modal.Header closeButton>
                   <Modal.Title>Edit Fournisseur</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                   <div>
                       <div className='form-group'>
                           <label>Fournisseur</label>
                           <input type="text" className='form-control' onChange={(e) => setfullName(e.target.value)} placeholder="Fournisseur" defaultValue={RowData.fournisseur}/>
                       </div>
                       <div className='form-group mt-3'>
                           <label>Réference</label>
                           <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="Réference" defaultValue={RowData.Réference} />
                       </div>
                       <div className='form-group mt-3'>
                           <label>Prix Achat</label>
                           <input type="text" className='form-control' onChange={(e) => setphoneNumber(e.target.value)} placeholder="Prix Achat" defaultValue={RowData.PrixAchat}/>
                       </div>
                      
                       <div className='form-group mt-3'>
                           <label>Prix Vente</label>
                           <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Prix Vente" defaultValue={RowData.PrixVente}/>
                           </div>
                           <div>
                           <label>Quantité</label>
                           <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Quantité" defaultValue={RowData.Quantité}/>
                       </div>
                       <div>
                           <label>Vente</label>
                           <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Vente" defaultValue={RowData.Vente}/>
                       </div>
                       <Button type='submit' className='btn btn-warning mt-4' onClick={handleEditFOUR}>Edit Fournisseur</Button>
                   </div>
               </Modal.Body>
               <Modal.Footer>
                   <Button variant='secondary' onClick={hanldeEditCloseFR}>Close</Button>
               </Modal.Footer>
           </Modal>
       </div>
       {/*****************************************************************************************************************/}

<div className='model-box-view'>
                <Modal
                    show={ViewListFour}
                    onHide={hanldeListFourClose}
                    backdrop="static"
                    keyboard={false}
                    size='lg'
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Liste Fournisseur</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <Table table table-striped table-hover table-bordered variant='dark'>
                        <thead>
                            <tr>
                                <th>Fournisseur</th>
                                <th>Réference</th>
                                <th>Adresse</th>
                                <th>Téléphone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Four.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.fournisseur}</td>
                                    <td>{item.Réference}</td>
                                    <td>{item.Adresse}</td>
                                    <td>{item.Téléphone}</td>
                                    <td style={{ minWidth: 190 }}>
                                        <Button size='sm' variant='primary' onClick={() => { handleViewShow(SetRowData(item)) }}>View</Button>|
                                        <Button size='sm' variant='warning' onClick={()=> {handleEditShow(SetRowData(item),setId(item._id))}}>Edit</Button>|
                                        <Button size='sm' variant='danger' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Delete</Button>|
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    
                    <Button type='submit' className='btn btn-success mt-4' onClick={handlePostShowfour}> Ajouter Founisseur</Button>

                        <Button variant='secondary' onClick={hanldeListFourClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                       
                </div>

                
{/*****************************************************************************************************************/} 
  </div> 
    );
};

/*<td>
                <Table table table-striped table-hover table-bordered variant='dark'>
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
                                        
                                        <Button size='sm' variant='warning' onClick={()=> {handleEditShowFR(SetRowData(item),setId(item._id))}}>Edit</Button>|
                                        <Button size='sm' variant='danger' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Delete</Button>|
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table></td> */