import { useState, useEffect } from 'react';
import * as RTStorage from 'rt-storage';

export default function useGlobalStorage({ storageOptions } : { storageOptions: any }) {
  const storage = new RTStorage(storageOptions);
  const useStorage = (key: string, initialData: any) => {
    const [data, setState] = useState(initialData);

    useEffect(() => {
      function handleStorageChange(data) {
        setState(data);
      }
      storage.getItem(key).then(lastData => {
        if (lastData) {
          setState(lastData);
        }
      });
      const subcription = storage.subscribe(key, handleStorageChange);
      return () => {
        subcription.unsubscribe();
      };
    }, []);

    const setData = async(newData: any) => {
      let newValue;
      if (typeof newData === 'function') {
        newValue = newData(data);
      } else {
        newValue = newData
      }
      setState(newValue);
      await storage.setItem(key, newValue);
    }
  
    return [data, setData];
  }
  return useStorage;
};
