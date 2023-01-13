import { Card, Row, Col, CardHeader, CardBody, CardTitle, CardText, Input, Form, Button, Label, Container, Modal, ModalBody, ModalHeader, } from 'reactstrap'
import { Fragment, useState } from 'react'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/flatpickr.min.css'
import QRCode from 'react-qr-code'



// import axios from 'axios'
// import { useNavigate } from "react-router-dom"
// import QRCode from 'qrcode.react'

const Timwood = () => {
  // const navigate = useNavigate();
  const [submit, setSubmit] = useState(false)
  const [pickerTransportDate, setPickerTransportDate] = useState(new Date());
  const [pickerTransportStart, setPickerTransportStart] = useState(new Date());
  const [pickerTransportEnd, setPickerTransportEnd] = useState(new Date());
  const [qrcode, useqrcode] = useState("")
  
//   const [ sgsoil, setSgsoil] = useState({
//     usernamel:"",
//     password:""
// })
//   axios.post("http://localhost:9800/api/sgsoil/", sgsoil)
//   .then(res => {
//     alert(res.data.message)
//     setSgsoil(res.data.sgsoil)
// })
const onAddQRCode = (e) => {
  useqrcode({...qrcode, [e.target.name]: e.target.value})
}  
  return (
    <Card>
        <CardHeader>
        <CardTitle>Timber and Wood Transport Permits</CardTitle>
        </CardHeader>
         <Form>
        <CardBody>
        <CardText>Form</CardText>
        <Label>Name of the applicant</Label>
        <Input placeholder="Name of the applicant" type="text"/>
        <Label>Permenent Address</Label>
        <Input placeholder="Permenent Addres" type="Textarea"/>
         <Label>NationalID cardNo</Label>
         <Input type="NationalID cardNo" placeholder="text"  />
         <Label>How items were obtained someone else:</Label>
         <Input type="Textarea" placeholder="How_items_were_obtained_someone_else"  />
         <Label>District</Label>
         <Input type="text" placeholder="District"  />
         <Label>Divisional Secetriate</Label>
         <Input type="text" placeholder="Divisional Secetriate"  />
         <Label>Grama Seva Division</Label>
         <Input type="text" placeholder="Grama Seva Division"  />
         <Label>Name of the land on which the tree timber was obtained</Label>
         <Input type="text" placeholder=">Name of the land on which the tree timber was obtained"  />
              <Label for='Deed_Number'>
              Deed Number
              </Label>
              <Input id='deed_number' placeholder='Deed Number' type="text" className='form-control'/>
              <Fragment>
              <Label for='Date_of_registration'>
                Date of Registration
              </Label>
              <Flatpickr
        value={picker}
        data-enable-time
        id='date-picker'
        className='form-control'
        onChange={date => setPicker(date)} />
        </Fragment> 

              <Label  for='Boundary_of_Lands_North'>
              Boundary_of_Lands_North
              </Label>
              <Input id='Boundary_of_Lands_North' placeholder='Boundary_of_Lands_North' text="Number" className='form-control'/>
              <Label  for='Boundary_of_Lands_East:'>
              Boundary_of_Lands_East:
              </Label>
              <Input id='Boundary_of_Lands_East:' placeholder='Boundary_of_Lands_East:' text="Number" className='form-control'/>
              <Label  for='Boundary_of_Lands_West:'>
              Boundary_of_Lands_West: 
              </Label>
              <Input id='Boundary_of_Lands_West' placeholder='Boundary_of_Lands_West' text="Number" className='form-control'/>
              <Label  for='Boundary_of_Lands_South'>
              Boundary_of_Lands_South
              </Label>
              <Input id='Boundary_of_Lands_South' placeholder='Boundary_of_Lands_South' text="Number" className='form-control'/>
              <Label  for='Land_type'>
              Land_type:
              </Label>
              <Input id='Land_type' placeholder='Land_type' text="text" className='form-control'/>
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
    <CardHeader><CardTitle>Past Timber and Wood Transportation Permits</CardTitle></CardHeader>
    <CardBody><CardText>Table</CardText></CardBody>
    </Card>
    </Card>
  )
}
export default Timwood

