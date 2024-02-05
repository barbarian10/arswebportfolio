// components/NextProjectLink.tsx
import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
interface PreviousProjectLinkProps {
  currentProject: string ;
}

const projects = ['digital-marketplace', 'portfolio-website', 'memory-game'];

const getPreviousProject = (currentProject: string): string | null => {
  const currentIndex = projects.indexOf(currentProject);
  return currentIndex > 0 ? projects[currentIndex - 1] : null;
};

const PreviousProjectLink = ({currentProject}: PreviousProjectLinkProps) => {
  const previousProject = getPreviousProject(currentProject);

  return (
    <>
      {previousProject && (
        <Link href={`/projects/${previousProject}`} passHref>
          <Button width='fit-content' rightIcon={<AiOutlineArrowLeft />} variant='outline' colorScheme='blue' size={{ base: 'sm' }}>Previous Project</Button>
        </Link>
      )}
    </>
  );
};

export default PreviousProjectLink;