import { Code, Timer10 } from '@material-ui/icons';
import { Color } from 'ag-grid-community';
import axios from 'axios';
import React, {  useState,useEffect } from 'react';
import Select  from 'react-select';
import { Table,Button,Modal } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Send';
import ImageButton from'react-image-button'
export const Caisse =()=>{
const caisse=[String]
const [ID,setId]=useState()
const [RowData, SetRowData] = useState([])
const [Delete,setDelete] = useState(false)
const [val,setVal]=useState()

const [Data, setData] = useState([]);
const [Remise, setRemise] = useState();
const [Montantblabla, setMontantblabla] = useState(0);
//const Date =`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`
const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`;
const [Fournisseur, setfournisseur] = useState("");
const [Description, setDescription] = useState("");

const [QuantitéVN, setQuantitéVN] = useState(0);
const [TotalM, setTotalM] = useState(0);
const [CodeArticle, setCodeArticle] = useState("");
const [Prix, setPrix] = useState(0);
const [ViewShow, SetViewShow] = useState(false)
    const handleViewShow = () => { SetViewShow(true) }
    const hanldeViewClose = () => { SetViewShow(false) }
     /***************************************************************************************/
     const ADDArch = async()=>{
        const url2 = 'http://localhost:5001/Archive'
        const Credentials = {Data,date}
        axios.post(url2, Credentials)
.then(response => {
    const result = response.data;
    const { status, message, data } = result;
    
    })
    handleDeleteCaisse()
    }
    /*************************************************************************************/
const GETDESC = async()=>{
    const urlA = `http://localhost:5001/Article/${CodeArticle}`   
    axios.get(urlA)
      .then(response => {
          const result = response.data;
          setDescription(result.Description)
          
          
      })}
      /***************************************************************************************/
      const ADD = async()=>{
        const url2 = 'http://localhost:5001/add_CAISSE'
        const Credentials = {CodeArticle,Description, Fournisseur, Prix,QuantitéVN}
        axios.post(url2, Credentials)
.then(response => {
    const result = response.data;
    const { status, message, data } = result;
    
    })
    }
    /***************************************************************************************** */
const GetFRData =async () => {
       const url = `http://localhost:5001/CAISSE/${CodeArticle}/${Fournisseur}`   
      axios.get(url)
        .then(response => {
            const result = response.data;
            console.log("DATA Fournisseur",response.data)
            setPrix(response.data.PrixVente)
                console.log("prix",Prix)  
        })    
}
/******************************************************************************************************* */
const GetDataBS = async () => {
    const urlg = 'http://localhost:5001/CAISSE'
     axios.get(urlg)
    .then(response => {
        const result = response.data;
        setData(result)                    
           // window.location.reload()
           console.log("data Caisse",Data)
    })
   
   
}

     /***************************************************************************** */   
const Total= async()=>{
   /* for (let i = 0; i < Data.length-1; i++) {
        // setTotalM(parseFloat(Data[i].Prix)+parseFloat(Data[i].Prix))  
        setMontant(parseFloat(Montant)+parseFloat(Data[i].Prix))
         console.log("TOTAL",Data[i].QuantitéVN)}*/
        Data.forEach(element => {
            setMontantblabla(parseFloat(parseFloat(Montantblabla)+parseFloat(element.QuantitéVN)))
            console.log("TOTAL foreach",Montantblabla)})

}
/****************************************************************************************** */
const Click = async()=>{
    console.log(CodeArticle)
    console.log(Fournisseur)
    GetFRData()
    GETDESC()
    ADD()
    GetDataBS()
    Total()
   setVal()
}
/*useEffect(() => {
    GetFRData()
    GETDESC()
    GetDataBS()
    GetDataBS()
    GetDataBS()
    GetDataBS()
    GetDataBS()
    Total()
}, [])*/
const handleDeleteCaisse = () =>{
    const url = `http://localhost:5001/CAISSEDELETE`
    axios.delete(url)
        .then(response => {
            const result = response.data;
            const { status, message } = result;
        })
        .catch(err => {
            console.log(err)
        })
}
/****************************************************************************************************************/
const handleDelete = () =>{
    const url = `http://localhost:5001/Supp_Article_Caisse/${ID}`
    axios.delete(url)
        .then(response => {
            const result = response.data;
            const { status, message } = result;
        })
        GetDataBS()
}
/****************************************************************************************************************/
return(
    <div>
         
    <Table striped bordered hover variant="dark">

    <tr  class="p-3 mb-2 bg-dark text-white">
      <td style={{'width': '500px'}}><b>CodeArticle</b></td>
      <td><input type="text" className='form-control' placeholder='Code Article' value={val} onChange={(e) => setCodeArticle(e.target.value)+GetDataBS()+GetFRData()}/></td>
    </tr>
    <tr class="p-3 mb-2 bg-primary text-white">
      <td><b>Fournisseur</b></td>
      <td><input type="text" className='form-control' placeholder='Fournisseur 'value={val} onChange={(e) => setfournisseur(e.target.value)+GetDataBS()+GetFRData()} /></td>
    </tr>
    <tr class="p-3 mb-2 bg-dark text-white">
      <td><b>Quantité</b></td>
      <td><input type="number" className='form-control' placeholder='Quantité ' value={val} onChange={(e) => setQuantitéVN(e.target.value)+GetDataBS()+GetFRData()}/></td>
    </tr>
    <tr class="p-3 mb-2 bg-primary text-white">
      <td><b>Remise %</b></td>
      <td><input type="text" className='form-control' placeholder='Remise % 'value={val} onChange={(e) => setRemise(e.target.value)+GetDataBS()+GetFRData()} /></td>
    </tr>
    <tr  class="p-3 mb-2 bg-dark text-dark">
    <Table striped  hover variant="warning">
    <tbody style={{'height': '310px', 'overflow':'scroll', 'display': 'block'}}>

                        <thead>
                        
                            <tr>
                           
                               <th><b>Code Article</b></th>
                                <th><b>fournisseur</b></th>
                                <th><b>Description</b></th>
                                <th style={{'width': '122px'}}><b>Prix</b> </th>
                                <th style={{'width': '122px'}}><b>Quantité</b></th>
                            </tr>
                        </thead>
                   <tbody>

                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.CodeArticle}</td>
                                    <td>{item.Fournisseur}</td>
                                    <td>{item.Description}</td>
                                    <td>{item.Prix}</td>
                                    <td>{item.QuantitéVN}</td>
                                    <td> <Button size='sm' variant='danger' onClick={() => {handleDelete(setId(item._id))}}>Delete</Button></td>
                                    
                                   
                                </tr>
                            )}
                        </tbody>
                       </tbody> 
                    </Table>
                    <td align='center'><Button variant='primary' onClick={() => {Click()}}><i className='fa fa-plu'></i>
                        Ajouter Article
                    </Button><br/><br/>
                    <Button style={{'width': '700px'}}variant='success' onClick={() => {handleViewShow()}}><i className='fa fa-plu'></i>
                    PAYER
                    </Button>
                   
                    
                    <br/>
                    <marquee><b class="text-warning"> Societe Touhri Piéce Auto</b></marquee><br/>
                    <marquee> <b class="text-warning">Rondpoint PASSAGE HHHHH</b></marquee><br/>
                    <marquee> <b class="text-warning">TW KI NETFAKER NUMRO TW N7OTO</b></marquee><br/></td>
                   
    </tr>
    <tr class="p-3 mb-2 bg-primary text-white">
    <td><b>Total sans remise</b><br/>{TotalM}</td>
    <td><b>Total avec remise</b><input type="text" className='form-control' placeholder='0.0'  readOnly/></td>
    </tr>
</Table>
                        

<div className='model-box-view'>
<Modal
    show={ViewShow}
    onHide={hanldeViewClose}
    backdrop="static"
    keyboard={false}>
    <Modal.Header closeButton>
        <Modal.Title>Payment</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <div>
        <div className='form-group'>
           <input type="text" className='form-control' onChange={(a) => setCodeArticle(a.target.value)} placeholder="Code Client" />
        </div>

            <b>Payment par :</b>        
     <div>
        <input type="radio" value="Espéce" name="gender" /> Espéce

        <input type="radio" value="cheque" name="gender" /> Chèque

      </div >
      <b>Numéro Chèque</b>
      <div className='form-group'>
                                <input type="text" className='form-control' onChange={(a) => setCodeArticle(a.target.value)} placeholder="Numéro chèque" />
                                </div>
        <b>MONTANT</b>
     <div className='form-group'>
                                <input type="text" className='form-control' onChange={(a) => setCodeArticle(a.target.value)} placeholder="Montant" />
                                </div>
<div>
            <input name='t1' type="text" className='form-control'readOnly placeholder="Rest"/></div>
            <Button type='submit' className='btn btn-success mt-4' onClick={()=>ADDArch()}>Payer</Button>

        </div>
    </Modal.Body>
    <Modal.Footer>
        <Button variant='secondary' onClick={hanldeViewClose}>Close</Button>
    </Modal.Footer>
</Modal>
</div> </div>


)
}
