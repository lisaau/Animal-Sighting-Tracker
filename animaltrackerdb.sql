--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: animals; Type: TABLE; Schema: public; Owner: tpl619_2
--

CREATE TABLE public.animals (
    animal_id integer NOT NULL,
    nickname character varying(50) NOT NULL,
    created_on timestamp without time zone DEFAULT now() NOT NULL,
    species_id integer
);


ALTER TABLE public.animals OWNER TO tpl619_2;

--
-- Name: animals_animal_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl619_2
--

CREATE SEQUENCE public.animals_animal_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.animals_animal_id_seq OWNER TO tpl619_2;

--
-- Name: animals_animal_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl619_2
--

ALTER SEQUENCE public.animals_animal_id_seq OWNED BY public.animals.animal_id;


--
-- Name: sightings; Type: TABLE; Schema: public; Owner: tpl619_2
--

CREATE TABLE public.sightings (
    sighting_id integer NOT NULL,
    health text NOT NULL,
    location text NOT NULL,
    email character varying(355) NOT NULL,
    animal_id integer
);


ALTER TABLE public.sightings OWNER TO tpl619_2;

--
-- Name: sightings_sighting_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl619_2
--

CREATE SEQUENCE public.sightings_sighting_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sightings_sighting_id_seq OWNER TO tpl619_2;

--
-- Name: sightings_sighting_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl619_2
--

ALTER SEQUENCE public.sightings_sighting_id_seq OWNED BY public.sightings.sighting_id;


--
-- Name: species; Type: TABLE; Schema: public; Owner: tpl619_2
--

CREATE TABLE public.species (
    species_id integer NOT NULL,
    common_name character varying(50) NOT NULL,
    scientific_name character varying(100) NOT NULL,
    estimated_wild integer NOT NULL,
    conservation_code character varying(2) NOT NULL,
    created_on timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.species OWNER TO tpl619_2;

--
-- Name: species_species_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl619_2
--

CREATE SEQUENCE public.species_species_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.species_species_id_seq OWNER TO tpl619_2;

--
-- Name: species_species_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl619_2
--

ALTER SEQUENCE public.species_species_id_seq OWNED BY public.species.species_id;


--
-- Name: animals animal_id; Type: DEFAULT; Schema: public; Owner: tpl619_2
--

ALTER TABLE ONLY public.animals ALTER COLUMN animal_id SET DEFAULT nextval('public.animals_animal_id_seq'::regclass);


--
-- Name: sightings sighting_id; Type: DEFAULT; Schema: public; Owner: tpl619_2
--

ALTER TABLE ONLY public.sightings ALTER COLUMN sighting_id SET DEFAULT nextval('public.sightings_sighting_id_seq'::regclass);


--
-- Name: species species_id; Type: DEFAULT; Schema: public; Owner: tpl619_2
--

ALTER TABLE ONLY public.species ALTER COLUMN species_id SET DEFAULT nextval('public.species_species_id_seq'::regclass);


--
-- Data for Name: animals; Type: TABLE DATA; Schema: public; Owner: tpl619_2
--

COPY public.animals (animal_id, nickname, created_on, species_id) FROM stdin;
6	Blue	2020-03-10 18:52:13.73547	3
5	Cerulean	2020-03-10 18:52:09.29594	3
2	Magenta	2020-03-10 18:42:15.30394	4
3	Pink	2020-03-10 18:51:32.298893	5
8	Celadon	2020-03-11 17:41:12.077297	2
4	Emerald	2020-03-10 18:51:51.636127	2
1	Daffodil	2020-03-10 18:25:10.861032	1
9	Dandelion	2020-03-11 17:55:21.903718	1
10	Lavender	2020-03-11 17:55:38.434834	4
11	Fushia	2020-03-11 17:56:35.060077	5
\.


--
-- Data for Name: sightings; Type: TABLE DATA; Schema: public; Owner: tpl619_2
--

COPY public.sightings (sighting_id, health, location, email, animal_id) FROM stdin;
47	Injured	North India	example5@gmail.com	6
48	Healthy	Borneo	example6@email.com	2
49	Healthy	South India	email8@email.com	5
6	Healthy	North India	email6@example.com	6
2	Ill	Africa	email2@example.com	3
4	Ill	Borneo	email4@example.com	4
3	Injured	Borneo	email3@example.com	1
1	Healthy	Sri Lanka	email1@example.com	2
14	Healthy	Africa	example1@email.com	11
42	Healthy	Africa	email@email.com	3
\.


--
-- Data for Name: species; Type: TABLE DATA; Schema: public; Owner: tpl619_2
--

COPY public.species (species_id, common_name, scientific_name, estimated_wild, conservation_code, created_on) FROM stdin;
1	Sumatran Elephant	Elephas maximus sumatranus	2500	CE	2020-03-10 17:32:06.529628
3	Indian Elephant	Elephas maximus indicus	20000	EN	2020-03-10 18:07:11.20446
2	Borneo Pygmy Elephant	Elephas maximus borneensis	1500	VU	2020-03-10 18:07:04.554786
4	Sri Lankan Elephant	Elephas maximus maximus	3000	EN	2020-03-11 17:35:14.647847
5	African Elephant	Loxodonta africana	415000	VU	2020-03-11 17:36:09.626065
\.


--
-- Name: animals_animal_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl619_2
--

SELECT pg_catalog.setval('public.animals_animal_id_seq', 11, true);


--
-- Name: sightings_sighting_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl619_2
--

SELECT pg_catalog.setval('public.sightings_sighting_id_seq', 49, true);


--
-- Name: species_species_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl619_2
--

SELECT pg_catalog.setval('public.species_species_id_seq', 5, true);


--
-- Name: animals animals_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl619_2
--

ALTER TABLE ONLY public.animals
    ADD CONSTRAINT animals_pkey PRIMARY KEY (animal_id);


--
-- Name: sightings sightings_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl619_2
--

ALTER TABLE ONLY public.sightings
    ADD CONSTRAINT sightings_pkey PRIMARY KEY (sighting_id);


--
-- Name: species species_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl619_2
--

ALTER TABLE ONLY public.species
    ADD CONSTRAINT species_pkey PRIMARY KEY (species_id);


--
-- Name: animals animals_species_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl619_2
--

ALTER TABLE ONLY public.animals
    ADD CONSTRAINT animals_species_id_fkey FOREIGN KEY (species_id) REFERENCES public.species(species_id);


--
-- Name: sightings sightings_animal_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl619_2
--

ALTER TABLE ONLY public.sightings
    ADD CONSTRAINT sightings_animal_id_fkey FOREIGN KEY (animal_id) REFERENCES public.animals(animal_id);


--
-- PostgreSQL database dump complete
--

