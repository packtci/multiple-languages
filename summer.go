package summer

func summer(numbers []int) int {
	var sum int
	for _, val := range numbers {
		sum = sum + val
	}
	return sum
}
