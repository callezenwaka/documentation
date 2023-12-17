#!/usr/bin/env python3
"""
Script to replace empty notebook cells with a comment so they render on jupyterbook HTML website

"""

def calculate_average(numbers):
  """
  Adds numbers and find mean.

  Parameters:
    a (int): The first number.
    b (int): The second number.
    ...

  Returns:
    int: The average of the numbers.
  """
  total = sum(numbers)
  count = len(numbers)
  return total / count

def add_numbers(a, b):
  """
  Adds two numbers.

  Parameters:
    a (int): The first number.
    b (int): The second number.

  Returns:
    int: The sum of the two numbers.
  """
  return a + b
