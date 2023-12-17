:html_theme.sidebar_secondary.remove: true

.. meta::
   :class: landing-page

OpenMined Syft Documentation
============================

.. banner::
   :color: rgba(40,40,60,0.8)
   :image: _images/pexels-jeff-stapleton.jpg
   :caption: Photo by Jeff Stapleton from Pexels
   :class: dark-banner

|jbook|

This is the Sphinx Pythia Theme, a Sphinx theme for use with Jupyter Books.
The Sphinx Pythia Theme inherits from the Sphinx Book Theme, which is used
by default in Jupyter Books.  It can be used on its own, outside of a Jupyter
Book, however, just like the Sphinx Book Theme, itself.

.. raw:: html

   <span class="d-flex justify-content-center py-4">
     <a href="about.html" role="button" class="btn btn-light btn-lg">
       Read more about the Sphinx Pythia Theme
     </a>
   </span>

Beyond Sphinx Book Theme
------------------------

The Sphinx Pythia Theme adds some new features to the existing features
provided by the Sphinx Book Theme and the PyData Sphinx Theme, upon which the
Sphinx Book Theme is built.

Banner Layouts
^^^^^^^^^^^^^^

One new feature is the use of alternate layouts for main pages, such as
the **banner** layout.  The banner layout converts all *titles* and *sections*
(i.e., ``#`` and ``##`` blocks) into *banners* that are full-width, have plenty
of padding (to separate them from the other content), and allow you to specify
background colors and images for the banner sections.

The page you are now reading is a *banner* layout page!

Standalone Layouts
^^^^^^^^^^^^^^^^^^

Another kind of alternate layout is the *standalone* layout, which displays
text exactly the same way as the *banner* layout, but it does not separate out
the sections into separate "banners."  The heading fonts and styling
are the same.

Documentation
-------------

.. rst-class:: text-center

   Together, these enable flexible model definitions and fast battery simulations, allowing users to
   explore the effect of different battery designs and modeling assumptions under a variety of operating scenarios.

.. grid:: 2

   .. grid-item-card::
      :img-top: _images/index-images/getting_started.svg

      Installation
      ^^^^^^^^^^^^

      The user guide is the best place to start learning PyBaMM. It contains an installation
      guide, an introduction to the main concepts and links to additional tutorials.

      +++

      .. button-ref:: installations/overview
         :expand:
         :color: secondary
         :click-parent:

         To the user guide

   .. grid-item-card::
      :img-top: _images/index-images/api.svg

      Deployment
      ^^^^^^^^^^

      Examples and tutorials can be viewed on the GitHub examples page,
      which also provides a link to run them online through Google Colab.

      +++

      .. button-ref:: deployments/overview
         :expand:
         :color: secondary
         :click-parent:

         To the examples

   .. grid-item-card::
      :img-top: _images/index-images/examples.svg

      Tutorials
      ^^^^^^^^^

      The reference guide contains a detailed description of the functions,
      modules, and objects included in PyBaMM. The reference describes how the
      methods work and which parameters can be used.

      +++

      .. button-ref:: tutorials/overview
         :expand:
         :color: secondary
         :click-parent:

         To the API documentation

   .. grid-item-card::
      :img-top: _images/index-images/contributor.svg

      Contributor's Guide
      ^^^^^^^^^^^^^^^^^^^

      Contributions to PyBaMM and its development are welcome! If you have ideas for
      features, bug fixes, models, spatial methods, or solvers, we would love to hear from you.

      +++

      .. button-link:: syft/overview
         :expand:
         :color: secondary
         :click-parent:

         To the contributor's guide


.. .. raw:: html

..    <span class="d-flex justify-content-center py-4">
..      <a href="#" role="button" class="btn btn-primary btn-lg">
..        Read the documentation
..      </a>
..    </span>

.. |jbook| image:: _images/badge.svg
   :target: https://jupyterbook.org
