import React, { useState, useEffect } from "react";
import { ChakraProvider, Box, Heading, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Button, Input, FormControl, FormLabel, Switch, Image } from "@chakra-ui/react";
import { FaUser, FaProjectDiagram, FaVoteYea } from "react-icons/fa";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://your-supabase-url.supabase.co";
const supabaseKey = "your-supabase-key";
const supabase = createClient(supabaseUrl, supabaseKey);

const UserProfile = () => {
  const [user, setUser] = useState({ name: "", preferences: "" });

  useEffect(() => {
    const fetchUserData = async () => {
      const { data } = await supabase.from("users").select("*").single();
      setUser(data);
    };
    fetchUserData();
  }, []);

  const updateUserData = async () => {
    await supabase.from("users").update(user).eq("id", user.id);
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="lg">
      <Heading size="md">
        User Profile <FaUser />
      </Heading>
      <FormControl mt={4}>
        <FormLabel>Name</FormLabel>
        <Input value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Preferences</FormLabel>
        <Input value={user.preferences} onChange={(e) => setUser({ ...user, preferences: e.target.value })} />
      </FormControl>
      <Button mt={4} onClick={updateUserData}>
        Update Profile
      </Button>
    </Box>
  );
};

const VotingSlider = ({ projectId, initialVote }) => {
  const [vote, setVote] = useState(initialVote);

  const submitVote = async (value) => {
    setVote(value);
    await supabase.from("votes").update({ score: value }).eq("project_id", projectId);
  };

  return (
    <Slider value={vote} onChange={submitVote} min={0} max={100}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <Box p={4} borderWidth={1} borderRadius="lg" mb={4}>
      <Heading size="md">
        {project.title} <FaProjectDiagram />
      </Heading>
      <Text mt={2}>{project.description}</Text>
      <VotingSlider projectId={project.id} initialVote={project.vote_score} />
    </Box>
  );
};

const ConsentForm = () => {
  const [consent, setConsent] = useState(false);

  const submitConsent = async () => {
    await supabase.from("consents").insert({ consent });
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="lg">
      <Heading size="md">
        Consent Form <FaVoteYea />
      </Heading>
      <FormControl display="flex" alignItems="center" mt={4}>
        <FormLabel htmlFor="consent" mb="0">
          I consent to data collection
        </FormLabel>
        <Switch id="consent" isChecked={consent} onChange={(e) => setConsent(e.target.checked)} />
      </FormControl>
      <Button mt={4} onClick={submitConsent}>
        Submit Consent
      </Button>
    </Box>
  );
};

const Index = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase.from("projects").select("*");
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <ChakraProvider>
      <Box p={4}>
        <Heading mb={4}>Faving Web Application</Heading>
        <UserProfile />
        <ConsentForm />
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>
    </ChakraProvider>
  );
};

export default Index;
