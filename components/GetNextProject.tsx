// components/NextProjectLink.tsx
import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';
interface NextProjectLinkProps {
  currentProject: string ;
}

const projects = ['digital-marketplace', 'portfolio-website', 'memory-game'];

const getNextProject = (currentProject: string): string | null => {
  const currentIndex = projects.indexOf(currentProject);
  return currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
};

const NextProjectLink = ({currentProject}: NextProjectLinkProps) => {
  const nextProject = getNextProject(currentProject);

  return (
    <>
      {nextProject && (
        <Link href={`/projects/${nextProject}`} passHref>
          <Button width='fit-content' rightIcon={<AiOutlineArrowRight />} variant='outline' colorScheme='blue' size={{ base: 'sm' }}>Next Project</Button>
        </Link>
      )}
    </>
  );
};

export default NextProjectLink;