import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { Treemap  } from 'react-vis';
import {Sunburst} from 'react-vis';





function _getRandomData(total) {
  const totalLeaves = total || Math.random() * 20;
  const leaves = [];
  for (let i = 0; i < totalLeaves; i++) {
    leaves.push({
      name: total ? total : String(Math.random()).slice(0, 3),
      size: Math.random() * 1000,
      color: Math.random(),
      style: {
        border: 'thin solid red'
      }
    });
  }
  return {
    title: '',
    color: 1,
    children: leaves,
    style: {
   border: 'thin solid black',
   colorRange: ['#3870B5', '#FFC4BE', '#ACE6E8', '#FF9292', '#D1DFEF', '#F3FFFF', '#DBF6F6']
   }
  };
}

const leaves = [
    {
      id: 1,
      name: 'Home Health',
      style: { font: '$questrial', color: '#1A3D6D', backgroundColor: '#44B6B7' },
      color: 93,
      size: 100,
    },

    {
      id: 2,
      name: 'Hospice',
      style: { font: '$questrial', color: '#1A3D6D', backgroundColor: '#AAE6E9' },
      color: 60,
      size: 75,
    },

    {
      id: 3,
      name: 'Managed Care',
      style: { font: '$questrial', color: '#1A3D6D', backgroundColor: '#D1DFEF' },
      color: 30,
      size: 36,
    },
    {
      id: 4,
      name: 'Home Services',
      style: { font: '$questrial', color: '#1A3D6D', backgroundColor: '#E7F3F3' },
      color: 35,
      size: 16,
    },
    {
      id: 5,
      name: 'Aging Care',
      style: { font: '$questrial', color: '#1A3D6D', backgroundColor: '#D4EFEF' },
      color: 40,
      size: 19,
    },

    {
      id: 6,
      name: 'Long Term Care',
      style: { font: '$questrial', color: '#1A3D6D', backroundColor: '#3870B5' },
      color: 140,
      size: 50,
    },

    {
      id: 7,
      name: 'Home Service B',
      style: { font: '$questrial', color: '#1A3D6D', backgroundColor: '#ACE6E8' },
      color: 55,
      size: 40,
    },

    {
      id: 8,
      name: 'Home Nursing',
      style: { font: '$questrial', color: '#1A3D6D', backgroundColor: '#3870B5' },
      color: 125,
      size: 65,
    },

    {
      id: 9,
      name: 'Custodial',
      style: { font: '$questrial', color: '#1A3D6D', backgroundColor: '#FF9292' },
      color: 75,
      size: 5,
    },

    {
      id: 10,
      name: 'Home Care',
      style: {
        font: '$questrial',
        color: '#1A3D6D',
        backgroundColor: '#FFC4BE',
      },
      color: 85,
      size: 20,
    },
  ];

class Home extends Component {
  state = {
    hoveredNode: false,
    treemapData: _getRandomData(20),
    useCirclePacking: false
  };

  render() {
    const {hoveredNode, useCirclePacking} = this.state;
    const treeProps = {
      animation: {
        damping: 9,
        stiffness: 300
      },
      data: this.state.treemapData,
      onLeafMouseOver: x => this.setState({hoveredNode: x}),
      onLeafMouseOut: () => this.setState({hoveredNode: false}),
      onLeafClick: () => this.setState({treemapData: _getRandomData()}),
      height: 300,
      mode: this.state.useCirclePacking ? 'circlePack' : 'squarify',
      getLabel: x => x.name,
      width: 350
    };
    return (
      <div className="dynamic-treemap-example">
        <Treemap
          title={'My New Treemap'}
          width={300}
          height={300}
          data={leaves}
          />
          onClick={() => this.setState({useCirclePacking: !useCirclePacking})}
        click above to the update data
        {hoveredNode && hoveredNode.value}
      </div>
    );
  }
}

export default Home;
