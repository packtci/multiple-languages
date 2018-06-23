package summer

import (
	"testing"
)

func TestSummer(t *testing.T) {
	actual := summer([]int{1, 2, 3, 4, 5})
	expected := 15

	if actual != expected {
		t.Error("actual should equal expected")
	}
}
