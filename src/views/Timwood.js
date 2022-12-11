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
  const [picker, setPicker] = useState(new Date())
  const [qrText, setQrText] = useState("")
  
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

// QR_Code: { 
//   type: mongoose.Types.ObjectId 
// },
// Serial_No: { 
//   type: mongoose.Types.ObjectId 
// },
// : 
// { 
//   type: String, 
//   required: true 
// },
// : { 
//   type: String, 
//   required: true 
// },
// : { 
//   type: String, 
//   required: true 
// },
// How_items_were_obtained_someone_else: { 
//   type: Boolean, 
//   required: true 
// },
// Name_of_the_person_who_sold_the_timber_timber: { 
//   type: String, 
//   required: true 
// },
// Address: { 
//   type: String, 
//   required: true 
// },
// Wood_Timber_Current_Location_Address: { 
//   type: String, 
//   required: true 
// },
// Grama_Seva_Division: { 
//   type: String, 
//   required: true 
// },
// Name_of_the_land_on_which_the_tree_timber_was_obtained: { 
//   type: String, 
//   required: true 
// },
// Deed_number: { 
//   type: String, 
//   required: true 
// },
// Date_of_registration: { 
//   type: [Date], 
//   default: Date 
// },
// Boundary_of_Lands_North: { 
//   type: Number, 
//   required: true 
// },
// Boundary_of_Lands_East: { 
//   type: Number, 
//   required: true 
// },
// Boundary_of_Lands_West: { 
//   type: Number, 
//   required: true 
// },
// Boundary_of_Lands_South: { 
//   type: Number, 
//   required: true 
// },
// Land_type: { 
//   type: String, 
//   required: true 
// },
// Land_type_No: { 
//   type: String, 
//   required: true 
// },
// Land_Issued_date: { 
//   type: [Date]
// },
// Area_of_the_land: { 
//   type: String, 
//   required: true 
// },
// hect: { 
//   type: Number 
// },
// acres: { 
//   type: Number
// },
// Rudd: { 
//   type: Number 
// },
// Perches: { 
//   type: Number 
// },
// cutdown_or_timber: { 
//   type: String, 
//   required: true 
// },
// Name_and_address_of_the_institution_from_which_the_timber_was_purchased: { 
//   type: String, 
//   required: true 
// },
// The_business_is_registered_with_the_Forest_Department: { 
//   type: Boolean, 
//   required: true 
// },
// Description_of_timber_trees_intended_for_transportation_Tree_type: { 
//   type: String, 
//   required: true 
// },
// Height_meters: { 
//   type: Number, 
//   required: true 
// },
// Back_Level_Round_m: { 
//   type: Number, 
//   required: true 
// },
// Age_of_trees_gross_age: { 
//   type: Number, 
//   required: true 
// },
// Details_of_trunks_timber_or_wood_products_Type: { 
//   type: String, 
//   required: true 
// },
// Height: { 
//   type: Number, 
//   required: true 
// },
// Round_Width: { 
//   type: Number, 
//   required: true 
// },
// Thickness_mm: { 
//   type: Number, 
//   required: true 
// },
// Details_and_number_of_pieces: { 
//   type: String, 
//   required: true 
// },
// Age_Duration_Used_Years: { 
//   type: Number, 
//   required: true 
// },
// Date_for_transportation_of_timber: { 
//   type: Date,
//   default: Date 
// },
// Vehicle_number: { 
//   type: String, 
//   required: true 
// },
// Location_intended_for_transportation: { 
//   type: String, 
//   required: true 
// },
// Where_the_transport_will_end: { 
//   type: String, 
//   required: true 
// },
// Which_route_will_be_transported: { 
//   type: String, 
//   required: true 
// },
// The_distance_between_the_place_of_transport_is_km: { 
//   type: Number, 
//   required: true 
// },
// Timber_Purchase_Receipt_Bills_Original_Timber_Transport_License: { 
//   type: Boolean, 
//   required: true 
// },
// Land_Deed_Land_Permits_Major_Notes_and_Land_Plan_Gazette_Notifications: { 
//   type: Boolean, 
//   required: true 
// },
// Disposal_license: { 
//   type: Boolean, 
//   required: true 
// },
// Receipt_of_trees_shoots_bark_timber_related_to_the_application: { 
//   type: Boolean, 
//   required: true 
// },
// Environmental_Impact_Assessment_Report: { 
//   type: Boolean, 
//   required: true 
// },
// Date: { 
//   type: [Date], 
//   default: Date 
// },
// Grama_Niladari_Signature: { 
//   type: Boolean, 
//   required: true 
// },
// Approved: { 
//   type: Boolean, 
//   required: true 
// },