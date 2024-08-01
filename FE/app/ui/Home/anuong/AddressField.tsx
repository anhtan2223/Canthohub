'use client'
import { useEffect, useState } from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';
import AddressService from '@service/AddressService';

export default function AddressField({ onChange }: { onChange?: (value: any, selectedOptions: any[]) => void; }) {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const provinces = await AddressService.getProvinces();
        const provinceOptions = provinces.map((province: any) => ({
          label: province.name,
          value: province.id,
          isLeaf: false,
        }));
        setOptions(provinceOptions);
        console.log(provinceOptions)
      } catch (error) {
        console.error('Error fetching provinces:', error);
      }
    };
    fetchProvinces();
  }, []);

  interface Option {
    value?: string | number | null;
    label: React.ReactNode;
    children?: Option[];
    isLeaf?: boolean;
  }

  const loadData: CascaderProps<Option>['loadData'] = async (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    // targetOption.loading = true;

    try {
      if (selectedOptions.length === 1) { // Province level
        const districts = await AddressService.getDistricts(targetOption.value as number);
        targetOption.children = districts.map((district: any) => ({
          label: district.name,
          value: district.id,
          isLeaf: false,
        }));
      } else if (selectedOptions.length === 2) { // District level
        const wards = await AddressService.getWards(targetOption.value as number);
        targetOption.children = wards.map((ward: any) => ({
          label: ward.name,
          value: ward.id,
          isLeaf: true,
        }));
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
    //   targetOption.loading = false;
      setOptions([...options]); // Trigger re-render with updated options
    }
  };

  const handleChange: CascaderProps<Option>['onChange'] = (value, selectedOptions) => {
    console.log(value, selectedOptions);
    if (onChange) {
      onChange(value, selectedOptions);
    }
  };

  return (
    <Cascader
      options={options}
      loadData={loadData}
      onChange={handleChange}
      changeOnSelect
      placeholder="Please select"
    />
  );
}
