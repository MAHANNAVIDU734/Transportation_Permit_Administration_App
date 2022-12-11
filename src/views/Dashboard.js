import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'

const Dashboard = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Transport Permits Legal or Non Legal Identification System</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>Recent Permits</CardText>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How to add Permits</CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
                Sri Lanka Map with Transportation Permits
          </CardTitle>
        </CardHeader>
      </Card>
      
    </div>
  )
}

export default Dashboard