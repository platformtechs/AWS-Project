import React, { Component } from 'react';
import Query from './ManageUser';

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardColumns,
  Col,
  Progress,
  Row,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandDanger = getStyle('--danger')

// var elements = 27;
// var data1 = [];
// var data2 = [];
// var data3 = [];

// for (var i = 0; i <= elements; i++) {
//   data1.push(random(50, 200));
//   data2.push(random(80, 100));
//   data3.push(65);
// }

// const mainChart = {
//   labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: hexToRgba(brandInfo, 10),
//       borderColor: brandInfo,
//       pointHoverBackgroundColor: '#fff',
//       borderWidth: 2,
//       data: data1,
//     },
//     {
//       label: 'My Second dataset',
//       backgroundColor: 'transparent',
//       borderColor: brandSuccess,
//       pointHoverBackgroundColor: '#fff',
//       borderWidth: 2,
//       data: data2,
//     },
//     {
//       label: 'My Third dataset',
//       backgroundColor: 'transparent',
//       borderColor: brandDanger,
//       pointHoverBackgroundColor: '#fff',
//       borderWidth: 1,
//       borderDash: [8, 5],
//       data: data3,
//     },
//   ],
// };

// const mainChartOpts = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips,
//     intersect: true,
//     mode: 'index',
//     position: 'nearest',
//     callbacks: {
//       labelColor: function (tooltipItem, chart) {
//         return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
//       }
//     }
//   },
//   maintainAspectRatio: false,
//   legend: {
//     display: false,
//   },
//   scales: {
//     xAxes: [
//       {
//         gridLines: {
//           drawOnChartArea: false,
//         },
//       }],
//     yAxes: [
//       {
//         ticks: {
//           beginAtZero: true,
//           maxTicksLimit: 5,
//           stepSize: Math.ceil(250 / 5),
//           max: 250,
//         },
//       }],
//   },
//   elements: {
//     point: {
//       radius: 0,
//       hitRadius: 10,
//       hoverRadius: 4,
//       hoverBorderWidth: 3,
//     },
//   },
// };

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  // componentDidMount() {
  //   if (this.props.location.load) {
  //     window.location.reload()
  //   }
  // }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    return (
      <div className="animated fadeIn">

        <Row>
          <Col>
            <Card>
              <CardHeader>
                <CardBody>
                  <Row className="text-center">
                    <Col sm={12} md className="mb-sm-2 mb-0">
                      <div className="text-muted" style={{ fontSize: 20 }}>Total Number of Sub Admins</div>
                      <strong style={{ fontSize: 25 }}>4</strong>
                      {/* <Progress className="progress-xs mt-2" color="success" value="40" /> */}
                    </Col>
                    <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                      <div className="text-muted" style={{ fontSize: 20 }}>Total Activated</div>
                      <strong style={{ fontSize: 25 }}>3</strong>
                      {/* <Progress className="progress-xs mt-2" color="info" value="20" /> */}
                    </Col>
                    <Col sm={12} md className="mb-sm-2 mb-0">
                      <div className="text-muted" style={{ fontSize: 20 }}>Total Deactivated</div>
                      <strong style={{ fontSize: 25 }}>1</strong>
                      {/* <Progress className="progress-xs mt-2" color="warning" value="60" /> */}
                    </Col>

                  </Row>
                </CardBody>
              </CardHeader>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <Query />
              {/* <CardColumns className="cols-2">
                <Card>
                   <CardHeader>
                    At A Glance
                  </CardHeader>
                  <CardBody>
                    <div className="chart-wrapper">
                      <Pie data={pie} />
                    </div>
                  </CardBody>
                </Card>
              </CardColumns> */}
            </Card>
          </Col>


          {/* <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Traffic</CardTitle>
                    <div className="small text-muted">November 2015</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
            </Card>
          </Col> */}
        </Row>

      </div>
    );
  }
}

export default Dashboard;
