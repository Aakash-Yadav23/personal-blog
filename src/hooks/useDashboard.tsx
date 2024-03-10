import create from 'zustand';


interface AppState {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const useStore = create<AppState>((set) => ({
    currentPage: "Dashboard", // Initial current page
    setCurrentPage: (page) => set({ currentPage: page }), // Function to update current page
}));

// Usage



const currentPage = useStore((state) => state.currentPage);
const setCurrentPage = useStore((state) => state.setCurrentPage);


export { currentPage, setCurrentPage, useStore };