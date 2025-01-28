
import PieChart from '@/components/client/Dashboard/Chart';
import { SideBar } from '@/components/client/SideBar';
import React from 'react';

const Home: React.FC = () => {
  const data = [200, 150, 100, 50, 80, 120]; // Remaining product counts
  const labels = [
    'Electronics',
    'Furniture',
    'Clothing',
    'Groceries',
    'Stationary',
    'Appliances',
  ];
  const descriptions = [
    'Items like phones, laptops, and TVs',
    'Tables, chairs, and cabinets',
    'Men’s and women’s clothing',
    'Everyday grocery items',
    'Notebooks, pens, and office supplies',
    'Home appliances like ovens and washers',
  ];
  const warehouses = [
    'A Warehouse',
    'B Warehouse',
    'C Warehouse',
    'A Warehouse',
    'B Warehouse',
    'C Warehouse',
  ];

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div style={{ flex: 1, padding: '1rem' }}>
        <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>
          Warehouse Management Dashboard
        </h1>
        <PieChart
          data={data}
          labels={labels}
          descriptions={descriptions}
          warehouses={warehouses}
        />
      </div>
    </div>
  );
};

export default Home;

