import { Card, Row, Col, CardHeader, CardBody, CardTitle, CardText, Input, Form, Button, Label, Container, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Fragment, useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import QRCode from 'react-qr-code';
import { useHistory } from 'react-router-dom';
// import { addSgsoil } from '../api/sgsoilApi.js';


const initialValue = {
  nameofl:'',
  N_id:'',
  address:'',
  zipcode:'',
  district:'',
  divsect:'',
  gdiv:'',
  where_extracted:'',
  typeofmineral:'',
  vehicle_no_plate_id:'',
  quantity_cubes:'',
  destination:'',
  reason:'',
  permitted_to_mine:'',
  permitted_to_transport:'',
  author_signature:'',
  Village_officer_Approved:'',
  pickerTransportDate:'',
  pickerTransportStart:'',
  pickerTransportEnd:''
}

const Sgsoil = () => {
  const [sgsoil, setSgsoil] = useState(initialValue);
  const [pickerTransportDate, setPickerTransportDate] = useState(new Date());
  const [pickerTransportStart, setPickerTransportStart] = useState(new Date());
  const [pickerTransportEnd, setPickerTransportEnd] = useState(new Date());
  const [qrcode, useqrcode] = useState("");
  const [title, setTitle] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const { nameofl, N_id, address, zipcode, district, divsect, gdiv, where_extracted, typeofmineral, vehicle_no_plate_id, quantity_cubes, destination, reason, permitted_to_mine, permitted_to_transport, author_signature, Village_officer_Approved } = sgsoil;


  let navigate = useHistory();

  const onValueChange = (e) => {
    setSgsoil({...sgsoil, [e.target.name]: e.target.value})
  }

  const addSgsoilDetails = async() => {
    await addSgsoil(sgsoil);
      navigate('/sgsoil');
  }

  const onAddQRCode = (e) => {
    useqrcode({...qrcode, [e.target.name]: e.target.value})
  }  

  return (
    <Card>
        <CardHeader>
        <CardTitle>Sand And Soil Transport Permits</CardTitle>
        </CardHeader>
         <Form>
        <CardBody>
        <CardText>Form</CardText>
        <Label>Name of The licener</Label>
        <Input placeholder="Name of the licener" type="text" value={nameofl} name="nameofl" onChange={(e) => onValueChange(e)}/>
        <Label>National Identity Card</Label>
        <Input placeholder="National Identity Card"  type="text" value={N_id} name="N_id" onChange={(e) => onValueChange(e)}/>
         <Label>Address</Label>
         <Input type="textarea" placeholder="Address"  value={address} name="address" onChange={(e) => onValueChange(e)}/>
         <Label>ZipCode</Label>
         <Input type="zipcode" placeholder="zipcode"  value={zipcode} name="zipcode" onChange={(e) => onValueChange(e)}/>
         <Label>District</Label>
         <Input type="text" placeholder="District"  value={district} name="district" onChange={(e) => onValueChange(e)}/>
         <Label>Divisional Secetriate</Label>
         <Input type="text" placeholder="Divisional Secetriate" value={divsect} name="divsect" onChange={(e) => onValueChange(e)}/>
         <Label>Grama Seva Division</Label>
         <Input type="text" placeholder="Grama Seva Division" value={gdiv} name="gdiv" onChange={(e) => onValueChange(e)}/>
         <Label>Where Extracted</Label>
         <Input type="text" placeholder="where extracted" value={where_extracted} name="where_extracted" onChange={(e) => onValueChange(e)}/>
              <Label for='type_of_Mineral'>
                Type Of Mineral
              </Label>
              <Input id='type_of_Mineral' placeholder='type of Mineral' type="text" className='form-control' name="typeofmineral" value={typeofmineral} onChange={(e) => onValueChange(e)}/>
              <Label for='Vehicle_No_Plate_ID'>
                Vehicle No Plate ID
              </Label>
              <Input
                type='text'
                id='Vehicle_No_Plate_ID'
                placeholder='CP LA-XXXX'
                className='form-control'
                value={vehicle_no_plate_id}
                name="vehicle_no_plate_id"
                onChange={(e) => onValueChange(e)}
              />
              <Label  for='quantity_cubes'>
                Quantity_Cubes
              </Label>
              <Input id='quantity_cubes' placeholder='Quantity Cubes' text="text" className='form-control' name="quantity_cubes" value={quantity_cubes} onChange={(e) => onValueChange(e)}/>
              <Label  for='destination'>
                Destination
              </Label>
              <Input id='Destination' placeholder='Destination' text="text" className='form-control' name="destination" value={destination} onChange={(e) => onValueChange(e)}/>
              <Label  for='reason'>
                Reason
              </Label>
              <Input
                id='reason'
                type="Textarea"
                placeholder="Reason"
                className='form-control'
                value={reason}
                name="reason"
                onChange={(e) => onValueChange(e)}
              />
           
             
            <Label for='switch-primary' className='form-check-label mb-50'>
              Permitted To Transport
            </Label>
            <div className='form-switch form-check-primary'>
              <Input type='switch' id='switch-primary'  defaultChecked value={permitted_to_transport} name="permitted_to_transport" onChange={(e) => onValueChange(e)}/>
            </div>
            <Fragment>
            <Col lg='4' md='6' className='mb-1'>
              <Label className='form-label' for='date-time-picker'>
              Permitted TO Transport Date
            </Label>
            <Flatpickr
              value={pickerTransportDate}
              name="pickerTransportDate"
              data-enable-time
              id='date-picker'
              className='form-control'
              onChange={date => setPickerTransportDate(date)}/>
            </Col>
            </Fragment>
            <Fragment>
            <Label className='form-label' for='date-time-picker'>
        Permitted To Transport Start
      </Label>
      <Flatpickr
        value={pickerTransportStart}
        name="pickerTransportStart"
        data-enable-time
        id='date-time-picker'
        className='form-control'
        onChange={date => setPickerTransportStart(date)}/>
        </Fragment>
        <Fragment>
      <Label className='form-label' for='date-time-picker'>
        Permitted To Transport End
      </Label>
      <Flatpickr
        value={pickerTransportEnd}
        name="pickerTransportEnd"
        data-enable-time
        id='date-time-picker'
        className='form-control'
        onChange={date => setPickerTransportEnd(date)} />
        </Fragment> 
        <Label className='form-label' for='sig-and-seat-ofauthorized-officer'>
        Signature and Seat of Authorized Officer
      </Label>
      <div className='form-switch form-check-primary'>
      <Input type='switch' id='switch-primary' name='Signature_and_seat_of_authorized_officer' defaultChecked value={author_signature} name="author_signature" onChange={(e) => onValueChange(e)}/>
    </div>  
    <Label className='form-label' for='sig-and-seat-ofauthorized-officer'>
        Village Officer Approved
      </Label>
      <div className='form-switch form-check-primary'>
      <Input type='switch' id='switch-primary' name='Village_officer_Approved' defaultChecked value={Village_officer_Approved} onChange={(e) => onValueChange(e)} />
    </div>  
    <Label className='form-label' for='qr-code'>
        QR Code
      </Label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color='primary'  onClick={() => addSgsoilDetails()}>
            Show
          </Button>
          <Button outline color='secondary' type='reset'>
          Reset
         </Button>
        
         <QRCode value={qrcode} name="qrcode" onChange={(e)=>onAddQRCode()}/>
        </CardBody>
        &nbsp;&nbsp;
        
        &nbsp;&nbsp;
        &nbsp;&nbsp;
        </Form>
        &nbsp;&nbsp;
        &nbsp;&nbsp;
        &nbsp;&nbsp;
        <Card>
    <CardHeader><CardTitle>Past Sand, Gravel and Soil Transportation Permits</CardTitle></CardHeader>
    <CardBody><CardText>Table</CardText></CardBody>
    </Card>
    </Card>
  )
}
export default Sgsoil
