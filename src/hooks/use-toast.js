export const useToast = () => {
  return {
    toast: ({ title, description }) => {
      console.log(title, description);
    }
  };
};
