import { Card, Row, Col, CardHeader, CardBody, CardTitle, CardText, Input, Form, Button, Label, Container, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { Fragment, useState } from 'react'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/flatpickr.min.css'
import QRCode from 'react-qr-code'



// import axios from 'axios'
// import { useNavigate } from "react-router-dom"
// import QRCode from 'qrcode.react'

const Sgsoil = () => {
  // const navigate = useNavigate();
  const [submit, setSubmit] = useState(false)
  const [picker, setPicker] = useState(new Date())
  const [qrText, setQrText] = useState("")
  const [title, setTitle] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');

  // function handleSubmit (e) {
  //   e.preventDefault();

  //   const dateStartFormatted = dateStart.replace(/-/g, "");
  //   const dateEndFormatted = dateEnd.replace(/-/g, "")

  //   setQrText(`BEGIN:VCALENDAR\nBEGIN:VEVENT\nDTSTART:${dateStartFormatted}\nDTEND:${dateEndFormatted}\nSUMMARY:${title}\nEND:VEVENT\nEND:VCALENDAR`);

  //   return false;
//   const [ sgsoil, setSgsoil] = useState({
//     usernamel:"",
//     password:""
// })
//   axios.post("http://localhost:9800/api/sgsoil/", sgsoil)
//   .then(res => {
//     alert(res.data.message)
//     setSgsoil(res.data.sgsoil)
// })
  return (
    <Card>
        <CardHeader>
        <CardTitle>Sand And Soil Transport Permits</CardTitle>
        </CardHeader>
         <Form>
        <CardBody>
        <CardText>Form</CardText>
        <Label>Name of The licener</Label>
        <Input placeholder="Name of the licener" type="text"/>
        <Label>National Identity Card</Label>
        <Input placeholder="National Identity Card"  type="text"/>
         <Label>Address</Label>
         <Input type="textarea" placeholder="Address"  />
         <Label>ZipCode</Label>
         <Input type="zipcode" placeholder="zipcode"  />
         <Label>District</Label>
         <Input type="text" placeholder="District"  />
         <Label>Divisional Secetriate</Label>
         <Input type="text" placeholder="Divisional Secetriate"  />
         <Label>Grama Seva Division</Label>
         <Input type="text" placeholder="Grama Seva Division"  />
         <Label>Where Extracted</Label>
         <Input type="text" placeholder="where extracted"  />
              <Label for='type_of_Mineral'>
                Type Of Mineral
              </Label>
              <Input id='type_of_Mineral' placeholder='type of Mineral' type="text" className='form-control'/>
              <Label for='Vehicle_No_Plate_ID'>
                Vehicle No Plate ID
              </Label>
              <Input
                type='text'
                id='Vehicle_No_Plate_ID'
                placeholder='CP LA-XXXX'
                className='form-control'
              />
              <Label  for='quantity_cubes'>
                Quantity_Cubes
              </Label>
              <Input id='quantity_cubes' placeholder='Quantity Cubes' text="text" className='form-control'/>
              <Label  for='destination'>
                Destination
              </Label>
              <Input id='Destination' placeholder='Destination' text="text" className='form-control'/>
              <Label  for='reason'>
                Reason
              </Label>
              <Input
                id='reason'
                type="Textarea"
                placeholder="Reason"
                className='form-control'
              />
              
              <Label for='switch-primary' className='form-check-label mb-50'>
              Permitted To Mine
            </Label>
            <div className='form-switch form-check-primary'>
              <Input type='switch' id='switch-primary' name='Permitted_To_Mine' defaultChecked className='form-control' />
            </div>
            <Fragment>
            <Col lg='4' md='6' className='mb-1'>
              <Label className='form-label' for='date-time-picker'>
              Permitted TO Mine Date
            </Label>
            <Flatpickr
              value={picker}
              data-enable-time
              id='date-picker'
              className='form-control'
              onChange={date => setPicker(date)}/>
            </Col>
            </Fragment>
            <Fragment>
            <Label className='form-label' for='date-time-picker'>
        Permitted To Mine Start
      </Label>
      <Flatpickr
        value={picker}
        data-enable-time
        id='date-time-picker'
        className='form-control'
        onChange={date => setPicker(date)}/>
        </Fragment>
        <Fragment>
      <Label className='form-label' for='date-time-picker'>
        Permitted To Mine End
      </Label>
      <Flatpickr
        value={picker}
        data-enable-time
        id='date-time-picker'
        className='form-control'
        onChange={date => setPicker(date)} />
             </Fragment>   
             
              <Label for='switch-primary' className='form-check-label mb-50'>
              Permitted To Transport
            </Label>
            <div className='form-switch form-check-primary'>
              <Input type='switch' id='switch-primary' name='Permitted_To_Transport' defaultChecked />
            </div>
            <Fragment>
            <Col lg='4' md='6' className='mb-1'>
              <Label className='form-label' for='date-time-picker'>
              Permitted TO Transport Date
            </Label>
            <Flatpickr
              value={picker}
              data-enable-time
              id='date-picker'
              className='form-control'
              onChange={date => setPicker(date)}/>
            </Col>
            </Fragment>
            <Fragment>
            <Label className='form-label' for='date-time-picker'>
        Permitted To Transport Start
      </Label>
      <Flatpickr
        value={picker}
        data-enable-time
        id='date-time-picker'
        className='form-control'
        onChange={date => setPicker(date)}/>
        </Fragment>
        <Fragment>
      <Label className='form-label' for='date-time-picker'>
        Permitted To Transport End
      </Label>
      <Flatpickr
        value={picker}
        data-enable-time
        id='date-time-picker'
        className='form-control'
        onChange={date => setPicker(date)} />
        </Fragment> 
        <Label className='form-label' for='sig-and-seat-ofauthorized-officer'>
        Signature and Seat of Authorized Officer
      </Label>
      <div className='form-switch form-check-primary'>
      <Input type='switch' id='switch-primary' name='Signature_and_seat_of_authorized_officer' defaultChecked />
    </div>  
    <Label className='form-label' for='sig-and-seat-ofauthorized-officer'>
        Village Officer Approved
      </Label>
      <div className='form-switch form-check-primary'>
      <Input type='switch' id='switch-primary' name='Village_officer_Approved' defaultChecked />
    </div>  
    <Label className='form-label' for='qr-code'>
        QR Code
      </Label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color='primary' onClick={() => setShow(true)}>
            Show
          </Button>
          <Button outline color='secondary' type='reset'>
          Reset
         </Button>
        
    
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