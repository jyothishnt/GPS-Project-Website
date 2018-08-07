import React, { Component } from 'react';
/*import { runInThisContext } from 'vm';
/*import ReactDOM from 'react-dom';
/*import React from 'react';*/


const list = [
   {
      title: 'GPSC1',
      url: 'https://microreact.org/project/rJyFk6ohZ',
      image: 'Cluster0.png',
      height: '220px',
      width: '150px',
      microreactStatus: 'available',
      num_GPSsamples: 679,
      ST: [202, 236, 257, 271, 320, 420, 651, 652, 925, 1396, 1412, 1421, 1428, 1451, 2706, 2514, 2834, 3791, 7132, 9933, 10683, 10731, 11101, 11116, 11326, 12185, 12228, 12229, 12543, 12591, 12686],
      serotype: ['6C','14','19A', '19F'],
      objectID: 0,
    }, 
    {
      title: 'GPSC2',
      url: 'https://microreact.org/project/HksMFKosZ',
      image: 'Cluster1.png',
      height: '60px',
      width: '90px',
      microreactStatus: 'available',
      num_GPSsamples: 677,
      ST: [217, 303, 611, 612, 615, 618, 2084, 2296, 3081, 3579],
      serotype: ['1'],
      countries: ['The Gambia'],
      objectID: 1,
    },
    {
        title: 'GPSC3',
        url: 'https://microreact.org/project/rypwR0oi-',
        image: 'Cluster2.png',
        height: '120px',
        width: '150px',
        microreactStatus: 'available',
        num_GPSsamples: 494,
        ST: [53],
        serotype: ['18C'],
        countries: ['Poland'],
        objectID: 2,
    },
    {
        title: 'GPSC4',
        url: 'https://microreact.org/project/r1JlObW2-',
        image: 'Cluster3.png',
        height: '70px',
        width: '90px',
        microreactStatus: 'available',
        num_GPSsamples: 481,
        ST: [202],
        serotype: '',
        objectID: 3,
    },
    {
        title: 'GPSC5',
        url: 'https://microreact.org/project/SyGNtlfa-',
        image: 'Cluster4.png',
        height: '170px',
        width: '110px',
        microreactStatus: 'available',
        num_GPSsamples: 438,
        ST: [172],
        serotype: '',
        objectID: 4,
      },
      {
          title: 'GPSC6',
          url: 'https://microreact.org/project/BJ1Ki8on-',
          image: 'Cluster5.png',
          height: '70px',
          width: '90px',
          microreactStatus: 'available',
          num_GPSsamples: 426,
          ST: [156],
          serotype: '',
          objectID: 5,
        },
        {
            title: 'GPSC7',
            url: 'https://microreact.org/project/HJx66R4h-',
            image: 'Cluster6.png',
            height: '80px',
            width: '140px',
            microreactStatus: 'available',
            num_GPSsamples: 332,
            ST: 36,
            serotype: '23F',
            countries: ['Poland', 'Israel', 'Belarus', 'Russia', 'Trinidad and Tobago', 'USA', 'South Africa'],
            objectID: 6,
          },
          {
            title: 'GPSC8',
            url: 'https://microreact.org/project/B12CSUCQb',
            image: 'Cluster7.png',
            height: '70px',
            width: '80px',
            microreactStatus: 'available',
            num_GPSsamples: 322,
            serotype: '',
            objectID: 7,
          },
          {
              title: 'GPSC9',
              url: 'https://microreact.org/project/HkGOXp7BZ',
              image: 'Cluster8.png',
              height: '130px',
              width: '90px',
              microreactStatus: 'available',
              num_GPSsamples: 319,
              serotype: '',
              objectID: 8,
            },
            {
              title: 'GPSC10',
              url: 'https://microreact.org/project/SJlD_ujUW',
              image: 'Cluster9.png',
              height: '80px',
              width: '70px',
              microreactStatus: 'available',
              num_GPSsamples: 312,
              serotype: '',
              objectID: 9,
            },
            {
            title: 'GPSC11',
            url: 'https://microreact.org/project/rkC3h5J3-',
            image: 'Cluster10.png',
            height: '160px',
            width: '100px',
            microreactStatus: 'available',
            num_GPSsamples: 299,
            serotype: '',
            objectID: 10,
        },
    {
        title: 'GPSC12',
        url: 'https://microreact.org/project/S1155pe3W',
        image: 'Cluster11.png',
        height: '80px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 294,
        serotype: '',
        objectID: 11,
    },
    {
        title: 'GPSC13',
        url: 'https://microreact.org/project/ry_xet8oZ',
        image: 'Cluster12.png',
        height: '160px',
        width: '250px',
        microreactStatus: 'available',
        num_GPSsamples: 275,
        serotype: '',
        objectID: 12,
      },
      {
        title: 'GPSC14',
        url: 'https://microreact.org/project/S1ArzY5iW',
        image: 'Cluster13.png',
        height: '70px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 267,
        serotype: '',
        objectID: 13,
      },
      {
          title: 'GPSC15',
          url: 'https://microreact.org/project/ByptxShib',
          image: 'Cluster14.png',
          height: '70px',
          width: '70px',
          microreactStatus: 'available',
          num_GPSsamples: 221,
          serotype: '',
          objectID: 14,
      },
      {
          title: 'GPSC16',
          url: 'https://microreact.org/project/HkhQRvUXb',
          image: 'Cluster15.png',
          height: '110px',
          width: '140px',
          microreactStatus: 'available',
          num_GPSsamples: 182,
          serotype: [''],
          objectID: 15,
      },
      {
          title: 'GPSC17',
          url: 'https://microreact.org/project/ryGSGFIoW',
          image: 'Cluster16.png',
          height: '70px',
          width: '80px',
          microreactStatus: 'available',
          num_GPSsamples: 182,
          serotype: [''],
          objectID: 16,
        },
        {
            title: 'GPSC18',
            url: 'https://microreact.org/project/Sk9O_GrQb',
            image: 'Cluster17.png',
            height: '150px',
            width: '170px',
            microreactStatus: 'available',
            num_GPSsamples: 181,
            ST: [9],
            objectID: 17,
          },
          {
              title: 'GPSC19',
              url: '',
              image: 'Cluster18.png',
              height: '70px',
              width: '70px',
              microreactStatus: 'unavailable',
              num_GPSsamples: 679,
              objectID: 18,
            },
            {
              title: 'GPSC20',
              url: 'https://microreact.org/project/HyHUNZ6jb',
              image: 'Cluster19.png',
              height: '70px',
              width: '70px',
              microreactStatus: 'available',
              num_GPSsamples: 161,
              objectID: 19,
            },
            {
                title: 'GPSC21',
                url: 'https://microreact.org/project/Hy58vXxXZ',
                image: 'Cluster20.png',
                height: '70px',
                width: '90px',
                microreactStatus: 'available',
                num_GPSsamples: 160,
                objectID: 20,
              },
              {
                title: 'GPSC22',
                url: 'https://microreact.org/project/BJgsPEtjZ',
                image: 'Cluster21.png',
                height: '130px',
                width: '130px',
                microreactStatus: 'available',
                num_GPSsamples: 157,
                objectID: 21,
              },
              {
              title: 'GPSC23',
              url: 'https://microreact.org/project/HkHZKtosZ',
              image: 'Cluster22.png',
              height: '150px',
              width: '130px',
              microreactStatus: 'available',
              num_GPSsamples: 151,
              objectID: 22,
          },
      {
          title: 'GPSC24',
          url: 'https://microreact.org/project/Bkz5V7xmW',
          image: 'Cluster23.png',
          height: '80px',
          width: '80px',
          microreactStatus: 'available',
          num_GPSsamples: 146,
          objectID: 23,
      },
      {
        title: 'GPSC25',
        url: 'https://microreact.org/project/rycuXeFj-',
        image: 'Cluster24.png',
        height: '70px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 112,
        objectID: 24,
      },
      {
          title: 'GPSC26',
          url: 'https://microreact.org',
          image: 'Cluster25.png',
          height: '70px',
          width: '70px',
          microreactStatus: 'unavailable',
          num_GPSsamples: 'unknown',
          objectID: 25,
        },
        {
            title: 'GPSC27',
            url: 'https://microreact.org/project/HkqubCwiW',
            image: 'Cluster26.png',
            height: '70px',
            width: '90px',
            microreactStatus: 'available',
            num_GPSsamples: 113,
            objectID: 26,
          },
          {
            title: 'GPSC28',
            url: 'https://microreact.org',
            image: 'Cluster27.png',
            height: '70px',
            width: '70px',
            microreactStatus: 'unavailable',
            num_GPSsamples: 'unknown',
            objectID: 27,
          },
          {
              title: 'GPSC29',
              url: 'https://microreact.org/project/S14ez4bQZ',
              image: 'Cluster28.png',
              height: '70px',
              width: '100px',
              microreactStatus: 'available',
              num_GPSsamples: 111,
              objectID: 28,
            },
            {
              title: 'GPSC30',
              url: 'https://microreact.org/project/HytjLvcsZ',
              image: 'Cluster29.png',
              height: '80px',
              width: '90px',
              microreactStatus: 'available',
              num_GPSsamples: 108,
              objectID: 29,
            },
            {
            title: 'GPSC31',
            url: 'https://microreact.org/project/S1E_HH2ib',
            image: 'Cluster30.png',
            height: '65px',
            width: '65px',
            microreactStatus: 'available',
            num_GPSsamples: 107,
            serotype: ['1'],
            objectID: 30,
        },
    {
        title: 'GPSC32',
        url: 'https://microreact.org/project/SkSnuK8sb',
        image: 'Cluster31.png',
        height: '90px',
        width: '150px',
        microreactStatus: 'available',
        num_GPSsamples: 101,
        objectID: 31,
    },
    {
        title: 'GPSC33',
        url: 'https://microreact.org/project/ByLWkElQ-',
        image: 'Cluster32.png',
        height: '70px',
        width: '70px',
        microreactStatus: 'available?',
        num_GPSsamples: 0,
        ST: '',
        serotype: '',
        countries: '',
        objectID: 32,
      },
      {
        title: 'GPSC34',
        url: 'https://microreact.org/project/Hkas03L7b',
        image: 'Cluster33.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 99,
        ST: '',
        serotype: '',
        countries: '',
        objectID: 33,
      },
      {
        title: 'GPSC35',
        url: 'https://microreact.org/project/H1GHIrno-',
        image: 'Cluster34.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 95,
        ST: '',
        serotype: '',
        countries: '',
        objectID: 34,
      },
      {
        title: 'GPSC36',
        url: 'https://microreact.org/project/Bk8-3tLib',
        image: 'Cluster35.png',
        height: '100px',
        width: '90px',
        microreactStatus: 'available',
        num_GPSsamples: 92,
        ST: '',
        serotype: '',
        countries: '',
        objectID: 35,
      },
      {
        title: 'GPSC37',
        url: 'https://microreact.org/project/SJym0hUmZ',
        image: 'cluster37.png',
        height: '120px',
        width: '140px',
        microreactStatus: 'available',
        num_GPSsamples: 92,
        ST: '',
        serotype: '',
        countries: '',
        objectID: 36,
      },
      {
        title: 'GPSC38',
        url: 'https://microreact.org/project/ryW-nYqjW',
        image: 'cluster38.png',
        height: '70px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 90,
        ST: '',
        serotype: '',
        countries: '',
        objectID: 37,
      },
      {
        title: 'GPSC39',
        url: 'https://microreact.org/project/Sk9Wp2IXb',
        image: 'Cluster39.png',
        height: '120px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 88,
        ST: '',
        serotype: '',
        countries: '',
        objectID: 38,
      },
      {
        title: 'GPSC40',
        url: 'https://microreact.org/project/SkkXm98i-',
        image: 'Cluster40.png',
        height: '70px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 86,
        ST: '',
        serotype: '',
        countries: '',
        objectID: 39,
      },
      {
        title: 'GPSC41',
        url: 'https://microreact.org/project/By9Dope3W',
        image: 'Cluster41.png',
        height: '70px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 125,
        ST: '',
        serotype: '',
        countries: '',
        objectID: 40,
      },
      {
        title: 'GPSC42',
        url: 'https://microreact.org/project/HJQiYHhoZ',
        image: 'cluster42.png',
        height: '100px',
        width: '120px',
        microreactStatus: 'available',
        num_GPSsamples: 78,
        ST: '',
        serotype: '',
        countries: '',
        objectID: 41,
      },
      {
        title: 'GPSC43',
        url: 'https://microreact.org/project/ByoP3w87b',
        image: 'cluster43.png',
        height: '100px',
        width: '120px',
        microreactStatus: 'available',
        num_GPSsamples: 77,
        ST: '',
        serotype: '',
        countries: '',
        objectID: 42,
      },
      {
        title: 'GPSC44',
        url: 'https://microreact.org/project/BJJ65B3s-',
        image: 'Cluster44.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 77,
        ST: '',
        serotype: '',
        countries: '',
        objectID: 43,
      },
      {
        title: 'GPSC45',
        url: 'https://microreact.org/project/SkN16sSGb',
        image: 'Cluster45.png',
        height: '100px',
        width: '90px',
        microreactStatus: 'available',
        num_GPSsamples: 68,
        ST: '',
        serotype: '',
        countries: '',
        objectID: 44,
      },
      {
        title: 'GPSC46',
        url: 'https://microreact.org/project/BkL7F3UzZ',
        image: 'cluster46.png',
        height: '70px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 68,
        ST: '',
        serotype: '',
        countries: '',
        objectID: 45,
      },
      {
        title: 'GPSC47',
        url: 'https://microreact.org/project/SJ3j8q8i-',
        image: 'cluster47.png',
        height: '80px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 64,
        ST: '',
        serotype: '',
        countries: '',
        objectID: 46,
      },
      {
        title: 'GPSC48',
        url: 'https://microreact.org/project/rJ1OkJLzW',
        image: 'cluster48.png',
        height: '80px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 63,
        ST: '',
        serotype: '',
        countries: '',
        objectID: 47,
      },
      {
        title: 'GPSC49',
        url: 'https://microreact.org/project/S1rm2r3ib',
        image: 'cluster49.png',
        height: '80px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 61,
        ST: '',
        serotype: '',
        countries: '',
        objectID: 48,
      },
      {
        title: 'GPSC50',
        url: 'https://microreact.org/project/HJMcUvcj-',
        image: 'cluster50.png',
        height: '100px',
        width: '90px',
        microreactStatus: 'available',
        num_GPSsamples: 56,
        ST: '',
        serotype: '',
        countries: '',
        objectID: 49,
      },
      {
        title: 'GPSC51',
        url: 'https://microreact.org/project/HkNn_qUjW',
        image: 'cluster51.png',
        height: '70px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 55,
        ST: [458],
        serotype: ['3'],
        countries: '',
        objectID: 50,
      },
      {
        title: 'GPSC52',
        url: 'https://microreact.org/project/B1h3TK5oW',
        image: 'cluster52.png',
        height: '80px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 54,
        ST: [5647],
        serotype: ['6B','13'],
        countries: '',
        objectID: 51,
      },
      {
        title: 'GPSC53',
        url: 'https://microreact.org/project/rykFUvqs-',
        image: 'cluster53.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 53,
        ST: [847],
        serotype: ['19A'],
        countries: '',
        objectID: 52,
      },
      {
        title: 'GPSC54',
        url: 'https://microreact.org/project/B1ygoqIoW',
        image: 'cluster54.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 52,
        ST: [4881],
        serotype: ['9V', '23F', '28F'],
        countries: '',
        objectID: 53,
      },
      {
        title: 'GPSC55',
        url: 'https://microreact.org/project/S1Ig4FynZ',
        image: 'cluster55.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 49,
        ST: [3774],
        serotype: ['12F'],
        countries: ['Israel', 'USA'],
        objectID: 54,
      },
      {
        title: 'GPSC56',
        url: 'https://microreact.org/project/SyUPIPqj-',
        image: 'cluster56.png',
        height: '100px',
        width: '90px',
        microreactStatus: 'available',
        num_GPSsamples: 48,
        ST: [11767],
        serotype: ['7F', '12F', '18C'],
        countries: '',
        objectID: 55,
      },
      {
        title: 'GPSC57',
        url: '',
        image: 'cluster57.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'unavailable',
        num_GPSsamples: 0,
        ST: [444],
        serotype: ['31'],
        countries: '',
        objectID: 56,
      },
      {
        title: 'GPSC58',
        url: 'https://microreact.org/project/Sk9Wp2IXb',
        image: 'cluster58.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 88,
        ST: [4036],
        serotype: ['6A', '6B', '19A'],
        countries: ['The Gambia'],
        objectID: 57,
      },
      {
        title: 'GPSC59',
        url: 'https://microreact.org/project/H1wrUPqoZ',
        image: 'cluster59.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 43,
        ST: [558, 10175, 10222, 10493, 10766, 12713, 12809],
        serotype: ['35B', '35D'],
        countries: '',
        objectID: 58,
      },
      {
        title: 'GPSC60',
        url: 'https://microreact.org/project/BJweNiIi-',
        image: 'cluster60.png',
        height: '60px',
        width: '70px',
        microreactStatus: 'available',
        num_GPSsamples: 42,
        ST: [448, 3265, 7593, 9810],
        serotype: ['NT'],
        countries: '',
        objectID: 59,
      },
      {
        title: 'GPSC61',
        url: 'https://microreact.org/project/SJEp9l6sW',
        image: 'cluster61.png',
        height: '120px',
        width: '140px',
        microreactStatus: 'available',
        num_GPSsamples: 40,
        ST: [9537],
        serotype: ['18A', '20A', '20B', '22F', '35A', '35C'],
        countries: [],
        objectID: 60,
      },
  ];

/*let searchTerm = "GPSC";
new RegExp(searchTerm, 'b');*/

const sero = function escapeRegExp(searchTerm){
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }
/*const searching = new RegExp(pattern, b);
RegExp = RegExp + '\b';*/
const matches = searchTerm => item =>
    item.title.match(RegExp(searchTerm + '\\b'));

const isSearched = searchTerm => item =>
    item.title.toLowerCase().match(searchTerm.toLowerCase());

const microStatus = searchTerm => item =>
    item.microreactStatus.toLowerCase().match(searchTerm.toLowerCase());

const count = 4;

const seroSearch = searchTerm => item => serotype =>
    item.serotype[count].match(searchTerm);


class GpsApp extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          /*show: true,*/
          list,
          searchTerm: 'GPS',
          category: 'title',
        };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value });
      }

    handleChange(event) {
        this.setState({category: event.target.value});
      }

    render() {

        const {searchTerm, list, category} = this.state;
    	return (
        <div className="container">
        <Dropdown
          value={category}
          onChange={this.handleChange}
          
        >
        </Dropdown>
        
        <Serotypedropdown
            value={searchTerm}
            onChange={this.onSearchChange}
            choice={category}
        >
        </Serotypedropdown>
        <Microdropdown
            value={searchTerm}
            onChange={this.onSearchChange}
            choice={category}
        >
        </Microdropdown>
        <Search 
          value={searchTerm}
          /*onChange={this.handleChange}*/
          onChange={this.onSearchChange}
          choice={category}
        >
        </Search>
            
        <Table
            list={list}
            pattern={searchTerm}
            value={category}
        />
        <Datatable
        list={list}
        pattern={searchTerm}
        value={category}
        >
        </Datatable>
    	</div>
        
        );
    }
}

class Search extends Component {
    render() {
      const { value, onChange, children, pattern, searchTerm, list, choice } = this.props;
      if (choice.includes('title'||'ST')) {
      return (
        <form>
            <span>Search by: </span> 
          {children} 
          <input
            type="text"
            value={value}
            onChange={onChange}
          />
        </form>
      );
    }
    if (choice.includes('ST')) {
        return (
          <form>
              <span>Search by: </span> 
            {children} 
            <input
              type="text"
              value={value}
              onChange={onChange}
            />
          </form>
        );
      }
    else {
        return (
        <span></span>
        );}
    }
    }
  

class Dropdown extends Component {
render() {
  const { value, onChange, children } = this.props;
  return (
    <form>
        {children}
      <label>
        Select a category:
        <select value={value} onChange={onChange}>
          <option value="title">GPSC</option>
          <option value="serotype">Serotype</option>
          <option value="ST">ST</option>
          <option value="micro">Microreact Status</option>
        </select>
      </label>
    </form>
  );
}
}

class Microdropdown extends Component {
    render() {
      const { value, onChange, children, choice } = this.props;
      if (choice.includes('micro')) {
      return (
        <form>
            {children}
          <label>
            Select status:
            <select value={value} onChange={onChange}>
              <option value="Microreact available">Microreact available</option>
              <option value="Microreact unavailable">Microreact unavailable</option>
            </select>
          </label>
        </form>
      );
    }
    else {
        return (
        <span></span>
        );}
    }
}

class Serotypedropdown extends Component {
    render() {
      const { value, onChange, children, choice } = this.props;
      if (choice.includes('serotype')) {
      return (
        <form>
            {children}
          <label>
            Select Serotype:
            <select value={value} onChange={onChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6A">6A</option>
              <option value="6B">6B</option>
              <option value="6C">6C</option>
              <option value="6D">6D</option>
              <option value="7B">7B</option>
              <option value="7C">7C</option>
              <option value="7F">7F</option>
              <option value="8">8</option>
              <option value="9A">9A</option>
              <option value="9L">9L</option>
              <option value="9N">9N</option>
              <option value="9V">9V</option>
              <option value="10A">10A</option>
              <option value="10B">10B</option>
              <option value="10C">10C</option>
              <option value="10F">10F</option>
              <option value="10X">10X</option>
              <option value="11A">11A</option>
              <option value="11B">11B</option>
              <option value="11C">11C</option>
              <option value="12A">12A</option>
              <option value="12B">12B</option>
              <option value="12F">12F</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15A">15A</option>
              <option value="15BC">15BC</option>
              <option value="15F">15F</option>
              <option value="16F">16F</option>
              <option value="17A">17A</option>
              <option value="17F">17F</option>
              <option value="18A">18A</option>
              <option value="18B">18B</option>
              <option value="18C">18C</option>
              <option value="18F">18F</option>
              <option value="19A">19A</option>
              <option value="19B">19B</option>
              <option value="19F">19F</option>
              <option value="20">20</option>
              <option value="20A">20A</option>
              <option value="20B">20B</option>
              <option value="21">21</option>
              <option value="22A">22A</option>
              <option value="22F">22F</option>
              <option value="23A">23A</option>
              <option value="23B">23B</option>
              <option value="23F">23F</option>
              <option value="24">24</option>
              <option value="25F">25F</option>
              <option value="27">27</option>
              <option value="28A">28A</option>
              <option value="28F">28F</option>
              <option value="29">29</option>
              <option value="31">31</option>
              <option value="33A">33A</option>
              <option value="33B">33B</option>
              <option value="33C">33C</option>
              <option value="33D">33D</option>
              <option value="33F">33F</option>
              <option value="34">34</option>
              <option value="35A">35A</option>
              <option value="35B">35B</option>
              <option value="35C">35C</option>
              <option value="35D">35D</option>
              <option value="35F">35F</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="42">42</option>
              <option value="45">45</option>
              <option value="46">46</option>
              <option value="48">48</option>
              <option value="NT">NT</option>
            </select>
          </label>
        </form>
      );
    }
    else {
        return (
        <span></span>
        );}
    }
}

class Table extends Component {
    render() {
        const { list, pattern, constant, searchTerm, value } = this.props;
        if (pattern.match('GPSC')) {
        return (
        <div>
        {/*{list.filter(isSearched(pattern)).map(item =>*/}
        {list.filter(matches(pattern)).map(item =>
            /*{this.state.list.map(item =>*/   
            <div key={item.objectID} className="clusterContainer">
            
            <div className="popover__wrapper">
                <img src={item.image} height={item.height} width={item.width} className="clusterImg"
                    /*className="popover__title"*/
                />
                <div className="push popover__content">
                    <p className="popover__message"><strong>{item.title}</strong></p>
                    <p className="popover__message">Number of GPS samples: {item.num_GPSsamples}</p>
                    {/*if ({item.url} !== '') {*/} 
                    <p><a href={item.url}>Microreact</a> {item.microreactStatus}</p>
                    {/*}}*/}
                </div>
            </div>
            </div>
            )}
        </div>
        );}
        if (value.includes('micro')) {
            return (
            <div>
            {/*{list.filter(isSearched(pattern)).map(item =>*/}
            {list.filter(microStatus(pattern)).map(item =>
                /*{this.state.list.map(item =>*/   
                <div key={item.objectID} className="clusterContainer">
                
                <div className="popover__wrapper">
                    <img src={item.image} height={item.height} width={item.width} className="clusterImg"
                        /*className="popover__title"*/
                    />
                    <div className="push popover__content">
                        <p className="popover__message"><strong>{item.title}</strong></p>
                        <p className="popover__message">Number of GPS samples: {item.num_GPSsamples}</p>
                        {/*if ({item.url} !== '') {*/} 
                        <p><a href={item.url}>Microreact</a> {item.microreactStatus}</p>
                        {/*}}*/}
                    </div>
                </div>
                </div>
                )}
            </div>
            );}
            
            if (value.includes('serotype')) {
                return (
                <div>
            {/*for(var i = 0; i < list[item][k].length())*/}
                {list.filter(item => item.serotype == pattern).map(item =>   
                    <div key={item.objectID} className="clusterContainer">
                    
                    <div className="popover__wrapper">
                        <img src={item.image} height={item.height} width={item.width} className="clusterImg"
                            /*className="popover__title"*/
                        />
                        <div className="push popover__content">
                            <p className="popover__message"><strong>{item.title}</strong></p>
                            <p className="popover__message">Number of GPS samples: {item.num_GPSsamples}</p>
                            {/*if ({item.url} !== '') {*/} 
                            <p><a href={item.url}>Microreact</a> {item.microreactStatus}</p>
                            {/*}}*/}
                        </div>
                    </div>
                    </div>
                    )}
                </div>
                );}

                if (value.includes('ST')) {
                    return (
                    <div>
                    {/*{list.filter(isSearched(pattern)).map(item =>*/}
                    {list.filter(item => item.ST == parseInt(pattern)).map(item =>
                        /*{this.state.list.map(item =>*/   
                        <div key={item.objectID} className="clusterContainer">
                        
                        <div className="popover__wrapper">
                            <img src={item.image} height={item.height} width={item.width} className="clusterImg"
                                /*className="popover__title"*/
                            />
                            <div className="push popover__content">
                                <p className="popover__message"><strong>{item.title}</strong></p>
                                <p className="popover__message">Number of GPS samples: {item.num_GPSsamples}</p>
                                {/*if ({item.url} !== '') {*/} 
                                <p><a href={item.url}>Microreact</a> {item.microreactStatus}</p>
                                {/*}}*/}
                            </div>
                        </div>
                        </div>
                        )}
                    </div>
                    );}

                else {
                    return (
                    <div>
                    {/*{list.filter(isSearched(pattern)).map(item =>*/}
                    {list.filter(isSearched(pattern)).map(item =>
                        /*{this.state.list.map(item =>*/   
                        <div key={item.objectID} className="clusterContainer">
                        
                        <div className="popover__wrapper">
                            <img src={item.image} height={item.height} width={item.width} className="clusterImg"
                                /*className="popover__title"*/
                            />
                            <div className="push popover__content">
                                <p className="popover__message"><strong>{item.title}</strong></p>
                                <p className="popover__message">Number of GPS samples: {item.num_GPSsamples}</p>
                                {/*if ({item.url} !== '') {*/} 
                                <p><a href={item.url}>Microreact</a> {item.microreactStatus} </p>
                                {/*}}*/}
                            </div>
                        </div>
                        </div>
                        )}
                    </div>
                    );}
    }
}

class Datatable extends Component {
    render() {
        const { list, pattern, constant, searchTerm, value } = this.props;
        if (pattern.match('GPSC')) {
        return (
        <div>
        {list.filter(matches(pattern)).map(item =>
            /*{this.state.list.map(item =>*/   
        <div className='datainfo' key={item.objectID}>   
            <table>
                <thead>
                <tr>
                <th>Data Table</th>
                </tr>
                </thead>
            <tbody>    
            <tr>
            <td>Cluster name: {item.title}</td>
            </tr>
            <tr>
            <td>Number of samples: {item.num_GPSsamples}</td>
            </tr>
            <tr>
            <td>Microreact information: {item.microreactStatus}</td>
            </tr>
            </tbody>
            </table>    
         </div>   
            )}
        </div>
        );}
        if (value.includes('serotype')) /*&& list.filter(item => item.serotype == pattern))*/ {
            return (
            <div className='datainfotitle'>
                <table>
                    <thead>
                    <tr>
                    <th>Data Table</th>
                    </tr>
                    </thead>
                </table>
            
            <table>
            <tbody>  
            <tr><th>Serotype: {pattern}</th></tr>  
            </tbody>
            </table>  
            {list.filter(item => item.serotype == pattern).map(item => 
                /*{this.state.list.map(item =>*/  
            /*if (list.filter(item => item.serotype == pattern)) {*/
            <div className='datainfo' key={item.objectID}>   
                <table>
                <tbody>  
                <tr>
                <td>Cluster: {item.title}</td>
                </tr>
                </tbody>
                </table>    
             </div>   
                )}
            </div>
            );}
        else {
            return (
                <span></span>
            )
        }
    }
}

export default GpsApp;