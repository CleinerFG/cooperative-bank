import UpdateLayout from '@/components/layouts/PageLayout/components/UpdateLayout';
import NewRequestForm from './NewRequestForm';

function NewRequest() {
  return (
    <>
      <UpdateLayout title="newRequest" />
      <NewRequestForm />
    </>
  );
}

export default NewRequest;
