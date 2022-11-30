import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../src/components/SmallCard";
import { mount } from 'cypress/react'

/// <reference types="cypress" />

describe('<NavBar>', () => {
    it('mounts', () => {
      mount(<NavBar />)
    })
  })